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

## 🎨 Frontend Documentation

### Overview

The frontend of the **Trjara** platform is carefully crafted to deliver a seamless, responsive, and interactive user experience. Utilizing modern technologies and best practices, the frontend manages all user-facing components, ensuring clarity, usability, and performance.

---

### Technologies Used

- **HTML5**: Provides the structural framework for all web pages.
- **CSS3**: Responsible for styling and visual presentation.
- **Bootstrap (via CDN)**: Rapid and responsive design using the Bootstrap framework.
  - [Bootstrap CSS](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css)
  - [Bootstrap JS Bundle](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js)
- **Bootstrap Icons**: For scalable vector icons ([CDN](https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css)).
- **IconScout Unicons**: Additional icon library ([CDN](https://unicons.iconscout.com/release/v4.0.8/css/line.css)).
- **JavaScript (ES6+)**: Adds interactivity and dynamic content.
- **jQuery**: For simpler DOM manipulation and AJAX ([CDN](https://code.jquery.com/jquery-3.7.0.min.js)).
- **Chart.js**: Used in the admin panel for interactive and appealing data visualizations ([CDN](https://cdn.jsdelivr.net/npm/chart.js)).
- **Django Templating**: Enables dynamic content rendering and template inheritance.

---

### Folder Structure

#### 1. `templates/` — HTML Templates

The `templates` directory manages all HTML files, utilizing Django’s templating engine to support dynamic content, code reuse, and maintainability.

**Key Structure:**
```
templates/
│
├── 404.html                  # Custom error page
├── admin_panel/              # All admin panel HTML pages
├── base/                     # Global templates (extend/include in other templates)
├── blogs/                    # Blog page templates
├── pages/                    # Main site pages (home, about, contact, etc.)
└── sections/                 # Reusable HTML sections (e.g., footer_contact)
```

##### Template Folders Explained

- **404.html**  
  Custom error page for handling "Page Not Found" errors.

- **admin_panel/**  
  Contains HTML files specific to the admin dashboard, including:
  - `admin_dashboard.html` – Main admin panel page with charts.
  - `login.html` – Admin login interface.

- **base/**  
  Reusable components and layouts for the entire site:
  - `base.html` – Main base template, extended by other pages.
  - `cursor.html` – Implements a custom cursor.
  - `footer.html` / `navbar.html` – Footer and navigation bar, included in `base.html`.
  - `forms.html` – Onboarding forms for delivery partners, shop owners, and users.
  - `buyer_survey.html`, `survey_form.html` – Two survey forms for data collection.
  - `metatags.html` – Contains metadata for SEO and social sharing.
  - `thank_you.html` – Thank you modal displayed after form submissions.

- **blogs/**  
  Blog post HTML files, e.g., `blog_01.html`.

- **pages/**  
  Main website pages, such as:
  - `about.html`, `admin.html`, `blogs.html`, `contact.html`, `home.html`, `privacy.html`, `terms.html`.

- **sections/**  
  Reusable sections for easy inclusion:
  - `footer_contact.html` – Contact section included before footers on key pages.

---

#### 2. `static/` — Static Assets

The `static` directory handles all static resources, including CSS, JS, and images.

**Key Structure:**
```
static/
├── css/
│   ├── blogs/
│   ├── pages/
│   ├── sections/
│   ├── buyers_survey.css
│   ├── cursor.css
│   ├── style.css
│   └── survey_form.css
├── js/
│   ├── pages/
│   ├── buyer_survey.js
│   ├── cursor.js
│   ├── forms.js
│   ├── script.js
│   └── survey_form.js
└── images/
    ├── blogs/
    ├── cursor/
    ├── main/           # Global images (e.g., logos, favicon)
    ├── pages/
    │   ├── about/
    │   ├── blog/
    │   ├── contact/
    │   └── home/
    └── ...             # Other images and subfolders as needed
```

##### Static Folders Explained

- **css/**  
  Stylesheets for various sections and pages, organized for maintainability.
  - `blogs/`, `pages/`, `sections/` – CSS for corresponding HTML templates.
  - `style.css` – Main global stylesheet.
  - `buyers_survey.css`, `survey_form.css`, `cursor.css` – Page or feature-specific styles.

- **js/**  
  JavaScript files for page interactivity and features.
  - `pages/` – JS for specific pages (`home.js`, `contact.js`, etc.).
  - `buyer_survey.js`, `survey_form.js`, `cursor.js`, `forms.js`, `script.js` – Scripts for forms, cursor effects, and global site behavior.

- **images/**  
  All image assets, organized by usage.
  - `main/` – Logos, favicon, general assets.
  - `pages/` – Subfolder for each major page with page-specific images.
  - `blogs/` – Images for blog posts, further divided if needed.
  - `cursor/` – Assets for custom cursor implementation.

---

### Additional Notes

- **CDN Usage:** Most third-party libraries (Bootstrap, jQuery, Chart.js, IconScout) are included via CDN for faster load times and easier updates.
- **Django Template Inheritance:** Reusable components (navbar, footer, etc.) are maintained in the `base` and `sections` folders, reducing code duplication and improving maintainability.
- **Separation of Concerns:** HTML, CSS, JS, and images are neatly organized, ensuring scalability and ease of contribution.
- **Customization:** Easily extendable with new sections, pages, or components by following the established structure.

---

**This frontend structure ensures a clear, maintainable, and scalable codebase—making development and collaboration efficient and effective.**

## 🛠️ Backend Documentation

### Overview

The backend of the **Trjara** project is built using Django, a robust Python web framework. It handles business logic, APIs, database management, admin operations, user management, and more. The backend is modularized into Django apps, each responsible for specific functionality, and is configured for scalability, security, and maintainability.

---

### Technologies & Packages

- **Python 3.09 or more** – Main programming language for backend logic.
- **Django 5.1.7** – Web framework for rapid, secure development.
- **MySQL** – Relational database for storing all persistent data.
- **openpyxl, et_xmlfile** – For Excel data processing and migrations.
- **python-decouple** – For environment variable management.
- **mysqlclient** – MySQL database connector for Django.
- **asgiref, pytz, tzdata, sqlparse, zope.interface** – Supporting packages for Django and asynchronous operations.

#### Example `requirements.txt`
```
asgiref==3.8.1
DateTime==5.5
Django==5.1.7
et_xmlfile==2.0.0
mysqlclient==2.2.7
openpyxl==3.1.5
python-decouple==3.8
pytz==2025.2
sqlparse==0.5.3
tzdata==2025.2
zope.interface==7.2
```

---

### Environment Variables

Sensitive information and environment-specific settings are managed via a `.env` file (not committed to version control).  
A template is provided as `.env.example`.  
Copy `.env.example` to `.env` and fill in your values.

**Sample `.env.example`:**
```
# Secret key for your Django project.
SECRET_KEY=

# Debug mode: True/False
DEBUG=

# Allowed hosts (comma-separated)
ALLOWED_HOSTS=

# Database settings
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=

# Email configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=
EMAIL_HOST_PASSWORD=
EMAIL_USE_TLS=True
DEFAULT_FROM_EMAIL=
```

---

### Main Backend Structure

```
trjara/
├── .env
├── .env.example
├── admin_panel/
├── backend/
├── manage.py
├── myapp/
├── requirements.txt
├── static/
├── templates/
└── trjara/
```

#### 1. `trjara/` (Inner Project Folder)

Contains core settings and routing for the Django project.

- **asgi.py, wsgi.py** – Entry points for ASGI/WSGI servers (deployment).
- **settings.py** – Main configuration: apps, database, static files, email, etc.
- **urls.py** – Root URL routing, includes app URLs.

#### 2. `admin_panel/` (Django App)

Handles all admin panel logic.

- **admin.py** – Django admin configurations (if any).
- **apps.py** – App configuration.
- **migrations/** – Database schema migrations.
- **models.py** – (If present) Models for admin-specific data (minimal here).
- **tests.py** – Unit tests for admin features.
- **urls.py** – URL routes for admin panel.
- **views.py** – All views (logic) for admin panel pages, dashboards, charts, etc.

#### 3. `backend/` (Django App)

Core business logic, APIs, and forms for the main website.

- **admin.py** – Admin interface for backend models.
- **apps.py** – App configuration.
- **forms.py** – Django forms (for user input, validation, etc.).
- **management/** – Custom Django admin commands.
    - e.g., scripts for importing data from Excel into the database.  
      Usage:  
      ```sh
      python manage.py <script_name_without_.py>
      ```
- **migrations/** – Database schema migrations for backend.
- **models.py** – All main business models (e.g. products, orders, users).
- **tests.py** – Unit tests for backend features.
- **urls.py** – API and backend URL routes.
- **utils.py** – Utility functions for backend operations.
- **views.py** – API endpoints and backend views.

#### 4. `myapp/` (Django App)

Handles frontend views and public-facing pages.

- **admin.py** – Admin interface for myapp models.
- **apps.py** – App configuration.
- **migrations/** – Database schema migrations for myapp.
- **models.py** – (If present) Models for frontend (minimal here).
- **tests.py** – Unit tests for frontend features.
- **urls.py** – URL routes for user-facing pages.
- **views.py** – View logic for rendering templates/pages.

---

### How to Use `.env` File

1. **Copy `.env.example` to `.env`**
2. **Fill in all variables (secret key, DB credentials, email config, etc.)**
3. **Never commit `.env` to version control.**

---

### Data Migration with Custom Management Commands

If you have data in Excel and want to insert it into MySQL:

- Place your script in `backend/management/commands/`
- Run with:
  ```sh
  python manage.py <script_name_without_.py>
  ```
- This allows automated population of database tables directly from structured files.

---

### Summary Table

| Folder/File       | Purpose                                                                |
|-------------------|------------------------------------------------------------------------|
| `.env`            | Sensitive environment variables (local only)                            |
| `.env.example`    | Template for creating your local `.env`                                |
| `requirements.txt`| Python dependencies                                                    |
| `manage.py`       | Django management utility                                              |
| `trjara/`         | Core Django config: settings, URLs, WSGI/ASGI                          |
| `admin_panel/`    | Admin dashboard, logic, URLs, views                                    |
| `backend/`        | APIs, models, forms, migrations, utilities, custom commands            |
| `myapp/`          | Public views, user-facing URLs, template rendering                     |
| `static/`         | Static files (CSS, JS, images)                                         |
| `templates/`      | HTML templates for frontend                                            |

---

**This backend structure ensures security, scalability, and maintainability for all core business operations of the Trjara platform.**
