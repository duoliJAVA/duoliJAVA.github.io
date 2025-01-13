要使用 OpenSSL 生成一个自签名证书，包含 IP 地址作为 **Subject Alternative Name (SAN)**，并能够导入到 JDK 中使用且在 NGINX 中配置，下面是完整的步骤：

### 1. **创建 OpenSSL 配置文件**

首先，你需要创建一个 OpenSSL 配置文件，确保在生成证书时包含 IP 地址作为 SAN。

#### 创建 `openssl.cnf` 配置文件

在任意目录下创建一个名为 `openssl.cnf` 的配置文件，内容如下：

```ini
[req]
distinguished_name = req_distinguished_name
req_extensions = v3_req

[req_distinguished_name]
commonName = Common Name (e.g. server FQDN or YOUR name)
commonName_default = 182.xxx.xx.xx  # 替换为你的 IP 地址

[v3_req]
subjectAltName = @alt_names

[alt_names]
IP.1 = 182.xxx.xx.xx  # 你的 IP 地址
```

- 在 `commonName_default` 中设置你希望作为证书的 Common Name（通常是主机名或 IP 地址）。
- 在 `[alt_names]` 部分添加你希望证书支持的 IP 地址或域名。

### 2. **生成证书和私钥**

接下来，使用 OpenSSL 生成证书和私钥。首先，生成证书请求（CSR）和私钥。

#### 生成 CSR 和私钥

运行以下命令来生成一个私钥文件和证书签名请求（CSR）：

```bash
openssl req -new -newkey rsa:2048 -nodes -keyout myserver.key -out myserver.csr -config openssl.cnf
```

#### 生成自签名证书

然后，使用 CSR 和私钥来生成自签名证书，并应用你在配置文件中指定的扩展：

```bash
openssl x509 -req -in myserver.csr -signkey myserver.key -out myserver.crt -extensions v3_req -extfile openssl.cnf
```

这将会生成一个包含 IP 地址的自签名证书 `myserver.crt` 和私钥 `myserver.key`。

### 3. **验证证书内容**

你可以检查生成的证书，确保它包含正确的 Subject Alternative Name（SAN）：

```bash
openssl x509 -in myserver.crt -text -noout
```

你应该能在输出中看到类似下面的内容：

```text
X509v3 Subject Alternative Name:
    IP Address:182.xxx.xx.xx
```

### 4. **将证书导入到 JDK 的信任库**

为了确保 Java 可以信任这个自签名证书，你需要将证书导入到 JDK 的信任库中。

#### 使用 `keytool` 导入证书

首先，确保你使用的证书文件（`myserver.crt`）和 JDK 安装路径正确。然后，运行以下命令将证书导入到 Java 的 `cacerts` 信任库：

```bash
keytool -import -alias myserver -file myserver.crt -keystore $JAVA_HOME/jre/lib/security/cacerts
```

- `$JAVA_HOME` 是你 JDK 安装的路径。例如，在 Linux 中通常是 `/usr/lib/jvm/java-<version>/`，在 Windows 中可能是 `C:\Program Files\Java\jdk-<version>\`。
- 默认的信任库密码是 `changeit`，如果你修改了密码，使用新的密码。

#### 验证证书导入

你可以运行以下命令来验证证书是否已成功导入到信任库：

```bash
keytool -list -keystore $JAVA_HOME/jre/lib/security/cacerts
```

在输出中，你应该能看到你刚才导入的证书（别名为 `myserver`）。

### 5. **在 NGINX 配置中使用证书**

现在，你已经生成了包含 IP 地址的自签名证书并导入到 JDK 中，接下来你需要配置 NGINX 使用这个证书。

#### 配置 NGINX 使用证书

1. 将生成的 `myserver.crt` 和 `myserver.key` 文件移动到 NGINX 的证书目录中。例如，假设将其放在 `/etc/nginx/ssl/` 目录下。
2. 修改 NGINX 配置文件（例如 `/etc/nginx/sites-available/default` 或 `/etc/nginx/nginx.conf`）来配置 SSL。

在配置文件的 `server` 块中添加以下内容：

```nginx
server {
    listen 443 ssl;
    server_name 182.xxx.xx.xx;  # 替换为你的 IP 地址

    ssl_certificate /etc/nginx/ssl/myserver.crt;
    ssl_certificate_key /etc/nginx/ssl/myserver.key;

    # 其他 SSL 配置
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers 'HIGH:!aNULL:!MD5';

    location / {
        # 你的其他配置
    }
}
```

- `server_name` 设置为你使用的 IP 地址或者域名。
- `ssl_certificate` 和 `ssl_certificate_key` 指定证书和私钥的路径。

1. **重新加载 NGINX 配置**：

在修改完配置文件后，重新加载 NGINX 配置使其生效：

```bash
sudo nginx -s reload
```

### 6. **验证 NGINX 配置**

最后，验证你的 NGINX 服务器是否能够正常工作：

1. 使用浏览器访问 `https://182.xxx.xx.xx`，检查是否能够成功连接，并且证书是否被正确加载。
2. 可以使用 `openssl` 命令行工具来测试 SSL 连接：

```bash
openssl s_client -connect 182.xxx.xx.xx:443
```

如果一切配置正确，你应该能够看到证书信息，并且没有 SSL/TLS 错误。

### 总结：

1. **生成证书**：使用 OpenSSL 创建一个包含 IP 地址的自签名证书，配置文件中设置了 SAN 扩展。
2. **导入 JDK 信任库**：使用 `keytool` 将证书导入到 Java 的信任库，避免 `No subject alternative names matching IP address` 错误。
3. **配置 NGINX 使用证书**：将证书配置到 NGINX 中，确保 HTTPS 连接能够正常工作。

按照这些步骤，你就能成功生成并使用包含 IP 地址的自签名证书，在 JDK 中导入，并且在 NGINX 中配置使用。