<p align="center">
  <img src="https://trjara.com/static/images/main/logo.png" alt="Trjara Logo" width="250"/>
</p>

<h1 align="center">TrJaRa Website</h1>

<p align="center">
  <em>Comprehensive documentation for developers</em>
</p>
<p align="center">
  <table>
    <tr>
      <th>Project Name</th>
      <th>Website Link</th>
      <th>Test Website Link</th>
      <th>Admin Panel Link</th>
    </tr>
    <tr>
      <td>Beginning Solutions</td>
      <td><a href="https://trjara.com/">https://trjara.com/</a></td>
      <td><a href="https://test.trjara.com/">https://test.trjara.com/</a></td>
      <td><a href="https://trjara.com/init/">https://trjara.com/init/</a></td>
    </tr>
  </table>
</p>

<hr>

## 🚀 Introduction

Welcome to **Trjara**, a hyperlocal e-commerce platform designed to connect local businesses and customers seamlessly. This website is developed and maintained by **Beginning Solutions**, focusing on empowering communities through technology and efficient digital solutions.

## 🏢 About the Company

**Trjara** is a hyperlocal e-commerce platform based in **Munger, Bihar, 811201**. The company operates in tech partnership with **Beginning Solutions**, working together to bring digital transformation to local businesses and communities.

## 🏬 Company Overview

**Trjara** is a dynamic platform designed to connect customers with local shops across Pan India. The application serves as a unified solution for delivery partners, clients, customers, and local shop owners, facilitating seamless transactions and collaborations. By bridging the gap between buyers and sellers at the hyperlocal level, Trjara empowers communities and supports the growth of local businesses nationwide.

## 🎯 Purpose

The primary purpose of **Trjara** is to showcase its innovative hyperlocal platform to a global audience. Trjara aims to reach and connect with clients, shop owners, delivery partners, and potential investors, establishing itself as a trusted and scalable solution in the e-commerce domain.

## 📋 Project Overview

The **Trjara** project is a comprehensive hyperlocal e-commerce website designed to connect local businesses with customers efficiently. This platform leverages a robust tech stack, including **HTML, CSS, JavaScript, Python, JSON**, and frameworks such as **Django** and **Bootstrap** to deliver a seamless and scalable online shopping experience.

## 🔗 Useful Links

- 🌐 [Company Website](https://trjara.com/)
- 🧪 [Test Website](https://test.trjara.com/)
- ⚙️ [Admin Panel](https://trjara.com/init)

## 🏗️ Project Architecture

Our project is built using a **monolithic architecture**, meaning all components are integrated into a single, unified application. The backend is powered by **Django**, which provides a robust and scalable foundation, while the frontend leverages **HTML, CSS, JavaScript**, and **Bootstrap** to create a responsive and engaging user experience.

### 🖥️ Frontend Layer

- **Technologies Used:** HTML, CSS, JavaScript  
- **Frameworks:** Bootstrap  
- **Libraries:** Chart.js (for interactive graphs)  
- **Data Communication:**  
  - `XMLHttpRequest` or `Fetch API` for asynchronous requests  
  - `JSON` (preferred over XML) for efficient data formatting

**Purpose:**  
The frontend layer delivers a seamless and interactive user interface, ensuring users can browse products, place orders, and interact with the platform efficiently. We use HTML, CSS, and Bootstrap for rapid, responsive, and cross-browser compatible design. JavaScript (with Chart.js) enables dynamic content and real-time updates, while Fetch API or XMLHttpRequest allows smooth data exchange with the backend.

### 🛠️ Backend Layer

- **Language:** Python  
- **Framework:** Django  
- **Database:** MySQL  
- **Tools:** SMTP for mail services

**Purpose:**  
The backend layer manages business logic, user authentication, order processing, and data persistence. Django is chosen for its security, scalability, and rapid development capabilities. MySQL offers reliable and efficient data storage, while SMTP ensures robust email communication for notifications and verifications.

### 🔄 Version Control

- **Tools:** Git & GitHub

**Purpose:**  
Version control with Git and GitHub enables collaborative development, tracks changes, and ensures code integrity across the team.

### 🚀 Deployment

- **Hosting:** Hostinger VPS  
- **Web Server:** Apache2  
- **Operating System:** Ubuntu

**Purpose:**  
Deploying on Hostinger VPS with Apache2 ensures high availability, scalability, and robust server management. Ubuntu provides a secure and flexible environment for hosting the application.

### 💻 Cross-Platform Compatibility

The project is designed to run seamlessly on:
- Windows
- Linux
- Mac OS

**Purpose:**  
Cross-platform compatibility guarantees accessibility and smooth operation for users and administrators on all major operating systems.

## 🧩 Tech Stack

### 🌐 Frontend

- **HTML** – Provides the structure and foundation of the web pages, ensuring content is well-organized and accessible.
- **CSS** – Handles the styling and layout, making the platform visually appealing and responsive.
- **JavaScript** – Adds interactivity, dynamic content, and enhances user experiences across the site.
- **Bootstrap** – A popular frontend framework that speeds up development with pre-designed components and ensures the website is mobile-friendly.
- **Chart.js** – Used for creating interactive and visually appealing data visualizations and graphs.

### 🖥️ Backend

- **Python** – Chosen for its readability, reliability, and robust ecosystem, making backend development efficient and maintainable.
- **Django** – A high-level Python web framework that provides security, scalability, and a clean architecture for rapid development of complex web applications.

### 🗄️ Database

- **MySQL** – Provides a reliable and scalable relational database system to store and manage all platform data efficiently.

### ☁️ Cloud & Hosting

- **Hostinger VPS** – Used for hosting the application, offering high performance, control, and scalability.
- **Apache2** – Serves the web application reliably and efficiently.
- **Ubuntu** – The chosen operating system for its stability, security, and wide support in server environments.

### 🛠️ Tools & External Services

- **SMTP** – Enables the sending of automated emails to users for notifications and verifications.
- **Git & GitHub** – Used for version control, ensuring smooth collaboration and code management among the development team.

## ⚙️ Installation & Setup

Follow the steps below to run the **Trjara** project on your local machine or deploy it on a server.

---

### 🖥️ Local Setup

1. **Clone the Repository**

   ```sh
   git clone https://github.com/Beginning-co-in/BSTP01.git
   ```

2. **Check Python Version** (for Windows)

   ```sh
   python --version
   ```

3. **Navigate to the Project Directory**

   ```sh
   cd BSTP01
   ```

4. **Setup Environment Variables**

   - Create a `.env` file by referring to the `.env.example` provided in the repo.

5. **Create a Virtual Environment**

   ```sh
   python -m venv venv
   ```

6. **Activate the Virtual Environment**

   - On Windows:
     ```sh
     venv\Scripts\activate
     ```
   - On Linux/Mac:
     ```sh
     source venv/bin/activate
     ```

7. **Install Dependencies**

   ```sh
   pip install -r requirements.txt
   ```

8. **Navigate to the Django Project Directory**

   ```sh
   cd trjara  # manage.py is located here
   ```

9. **Check Configuration**

   - Review `settings.py` to ensure all configurations are correct.

10. **Make Migrations**

    ```sh
    python manage.py makemigrations backend
    python manage.py makemigrations myapp
    ```

11. **Apply Migrations**

    ```sh
    python manage.py migrate
    ```

12. **Run the Project**

    ```sh
    python manage.py runserver
    ```

    - Open the provided URL in your browser to access the website.

---

### ☁️ Server (Cloud) Deployment

1. **Navigate to Project Directory**

   ```sh
   cd /var/www/BSTP01
   ```

2. **Activate Virtual Environment**

   ```sh
   source venv/bin/activate
   ```

3. **Go Inside Django App Directory**

   ```sh
   cd trjara
   ```

4. **Apply Migrations (if any)**

   ```sh
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Run the Server**

   ```sh
   python manage.py runserver 0.0.0.0:8000
   ```

   - If port 8000 is unavailable, change to another port (e.g., `0.0.0.0:8080`).

6. **Stopping the Server**

   - Press `Ctrl + C`

7. **Deactivate Virtual Environment**

   ```sh
   deactivate
   ```

Follow these steps to successfully install and set up the project for local development or deployment on the server.

## 📁 File Structure Explanation

Below is an overview of the main project structure for **BSTP01** and a detailed explanation of each important folder and file:

```
BSTP01/
│
├── .gitignore              # Specifies files and directories to be ignored by Git
├── README.md               # Project documentation (you are reading it!)
├── docs/                   # Documentation and related resources
└── trjara/                 # Main Django project directory
```

Inside the `trjara/` directory:

```
trjara/
│
├── .env                    # Environment-specific variables (not committed)
├── .env.example            # Example environment variables file for setup
├── admin_panel/            # Django app: logic, views, and URLs for the admin panel
├── backend/                # Django app: APIs and logic related to website forms and backend operations
├── manage.py               # Django management utility for running commands
├── myapp/                  # Django app: handles frontend HTML rendering and user-facing page URLs
├── requirements.txt        # Python dependencies to be installed
├── static/                 # Static files: images, CSS, JS
├── templates/              # HTML templates used by Django views
└── trjara/                 # Core Django project folder with settings and configuration
```

### Folder & File Explanations

- **.gitignore**  
  Contains a list of files and directories for Git to ignore (e.g., sensitive files, virtual environments, compiled files).

- **README.md**  
  Main documentation file explaining the project.

- **docs/**  
  Contains additional documentation and resources.

- **trjara/** (Outer)  
  This is the main folder you work inside for development, setup, and running the project.

---

#### Inside `trjara/` (Main Working Directory):

- **.env / .env.example**  
  - `.env.example`: Provided when you clone the project. Copy and rename this to `.env` and update the variables as needed for your local setup.
  - `.env`: Contains sensitive environment-specific variables (not committed to version control).

- **admin_panel/**  
  A Django app dedicated to the admin panel. It contains all logic, views, and URL configurations for administrative functionalities.

- **backend/**  
  Django app that manages backend logic, APIs, and forms for the main website. Handles requests from the frontend and serves data.

- **manage.py**  
  Django’s command-line utility for running the development server, migrations, and other management commands.

- **myapp/**  
  Django app focused on frontend user experience. Handles URL routing and renders HTML pages for users.

- **requirements.txt**  
  Lists all the Python packages required to run the project. Install these dependencies using pip.

- **static/**  
  Stores all static files such as images, CSS, and JavaScript used by the project.

- **templates/**  
  Contains all HTML templates used by Django views to render web pages.

- **trjara/** (Inner Project Folder)
  - This is the core Django project folder. It contains:
    - `settings.py`: Main settings and configuration for the Django project.
    - `urls.py`: Main URL routing for the project.
    - `asgi.py` & `wsgi.py`: Entry points for ASGI and WSGI servers (used for deployment).

---

> **Tip:**  
> Create your virtual environment inside the main `trjara/` directory and ensure your `.env` file is set up before running the project.

