# 🎓 National Institute of Technology Patna Website 🌐

Welcome to the official repository for the National Institute of Technology Patna's website. This repository contains all the source code, assets, and documentation needed to develop and maintain the website.

## 📋 Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## 📘 Introduction

This repository contains the source code and assets for the website of the National Institute of Technology Patna (NIT Patna). The website is built using Gatsby.js and runs on Node.js version 18.x.

## 🛠 Tech Stack

- **Framework**: Gatsby.js , React.js , Next.js
- **Language**: JavaScript
- **Server**: Node.js (v18.x)
- **Package Manager**: Yarn

## 🚀 Getting Started

To get a local copy of the project up and running, follow these steps:

1. **Clone the repository:**
 
   ```bash
   git clone https://github.com/nitp-website/nitp-main-website-ec2
   cd NITP-Website
   ```

2. **Install dependencies:**
   
   ```bash
   yarn install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the necessary environment variables as specified in the [Environment Variables](#environment-variables) section.

4. **Start the development server:**
   
   ```bash
   yarn develop
   ```

5. **Access the website:**
   Open your browser and navigate to `http://localhost:8000`.

## 🌐 Environment Variables

Before running the application, you need to set up the necessary environment variables. Create a `.env.development` file in the root directory and add the following placeholders:

```bash
GATSBY_API_URL=https://admin.nitp.ac.in
```


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
