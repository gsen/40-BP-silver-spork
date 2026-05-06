import crypto from "crypto";

const password = "myPassword123";

const hash = crypto.createHash("sha256").update(password).digest("base64");


console.log(hash);

function compare(typedPassword) {
    const hashedPassword = crypto.createHash("sha256").update(typedPassword).digest("base64");

    if (hashedPassword === hash) {
        console.log("match")
    } else {
        console.log("fail")
    }
}

compare("myPassword123");
compare("myPassword1234");

const algo = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
function encrypt(data) {
    console.log("original:", data)
    const cipher = crypto.createCipheriv(algo, key, iv);
    let encrypted = cipher.update(data, "utf-8", "base64");

    encrypted += cipher.final("base64");
    console.log("encrypted:", encrypted);
    return encrypted;
}



function decrypt(encryptedText) {
    const decipher = crypto.createDecipheriv(algo, key, iv);
    let decrypted = decipher.update(encryptedText, "base64", "utf-8");
    decrypted += decipher.final("utf-8");
    console.log("decrypted", decrypted);
}

decrypt(encrypt("hello ency"));