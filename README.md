
# 🎓National Institute of Technology Patna Website 🌐

Welcome to the official repository for the National Institute of Technology Patna's website. This repository contains all the source code, assets, and documentation needed to develop and maintain the website.

## 📋 Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## 📘 Introduction

This repository contains the source code and assets for the website of the National Institute of Technology Patna (NIT Patna). The website is built using Next.js and runs on Node.js version 16.x.

## 🛠 Tech Stack

- **Framework**: [Next.js] , [Google Auth]
- **Language**: JavaScript, React, Next 
- **Server**: Node.js (v16.x)
- **Package Manager**: npm

## 🚀 Getting Started

To get a local copy of the project up and running, follow these steps:

1. **Clone the repository:**
 
   `git clone https://github.com/nitp-website/NITP-Admin-Portal-EC2.git`<br>
   `cd NITP-Admin-Portal-EC2`
  

2. **Install dependencies:**
   
   ```npm install```
   

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the necessary environment variables as specified in the [Environment Variables](#environment-variables) section.

4. **Start the development server:**
   
   `node server.js`

5. **Access the website:**
   Open your browser and navigate to `http://localhost:81`.

## 🌐 Environment Variables

Before running the application, you need to set up the necessary environment variables. Create a `.env` file in the root directory and add the following placeholders:


`NEXTAUTH_URL=http://localhost:81`<br>
`URL=http://localhost:81`<br>
`DOMAIN=http://localhost:81`<br>
`NEXT_GOOGLE_ID=`<br>
`NEXT_GOOGLE_SECRET=`<br>
`JWT_SECRET=`<br>
`MYSQL_HOST=`<br>
`MYSQL_DATABASE=`<br>
`MYSQL_USERNAME=`<br>
`MYSQL_PASSWORD=`<br>
`MYSQL_PORT=`<br>
`PORT=`<br>
`TOKEN_PATH=`<br>
`FOLDER_ID=`<br>
`BROADCAST_EMAIL=`<br>
`BROADCAST_EMAIL_PASS=`<br>
`REDIRECT_URIS=https://developers.google.com/oauthplayground/`<br>

Replace the placeholder values with your actual credentials and configuration settings.




## 🤝 Contributing

We welcome contributions to improve the website. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

For any questions or support, please contact the project maintainers.

