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

## 📡 API Documentation

This section documents the main URL routing and API endpoints for the Trjara platform, including both user-facing and administrative routes. Here you will find an overview of URL structure, route purposes, and how to interact with each endpoint.

---

### 🌐 Main Project URLs

| URL Pattern                  | Purpose / Description                                                 |
|------------------------------|-----------------------------------------------------------------------|
| `/laila/`                    | Default Django admin panel (manage superusers, core data)             |
| `/`                          | Main website (all public HTML pages, handled by `myapp`)              |
| `/api/`                      | Backend logic and form APIs (`backend` app)                           |
| `/admin/`                    | Custom admin panel (admin CRUD and dashboard, `admin_panel` app)      |

**Base URLs:**
- Production: [https://trjara.com/](https://trjara.com/)
- Testing: [https://test.trjara.com/](https://test.trjara.com/)
- Local: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

---

### 🛠️ Default Admin Panel

- **URL:** `/laila/`
- **Purpose:** Access the default Django admin interface. Here, superusers can manage models, users, and other Django-admin enabled data.

---

### 🖥️ User-Facing Website (Handled by `myapp`)

All routes below are handled in `myapp/urls.py` and rendered via Django templates.

| Path                  | Method | View Function     | Description                                       |
|-----------------------|--------|------------------|---------------------------------------------------|
| `/`                   | GET    | `home`           | Renders the homepage (`pages/home.html`)           |
| `/about/`             | GET    | `about`          | About page (`pages/about.html`)                    |
| `/contact/`           | GET    | `contact`        | Contact page (`pages/contact.html`)                |
| `/blogs/`             | GET    | `blogs`          | Blogs listing (`pages/blogs.html`)                 |
| `/privacy/`           | GET    | `privacy`        | Privacy Policy (`pages/privacy.html`)              |
| `/terms/`             | GET    | `terms`          | Terms & Conditions (`pages/terms.html`)            |
| `/admin/`             | GET    | `admin`          | Custom admin landing page (`pages/admin.html`)     |
| `/init/`              | GET    | `init_redirect`  | Redirect to admin panel login/dashboard            |
| `/survey_form/`       | GET    | `survey`         | Survey form page (`base/survey_form.html`)         |
| `/buyer_survey/`      | GET    | `buyer`          | Buyer survey page (`base/buyer_survey.html`)       |
| `/blog_01/`           | GET    | `blog_01`        | Specific blog post (`blogs/blog_01.html`)          |

#### 🔄 Admin Redirect
- **URL:** `/init/`
- **Behavior:**  
  - If user is authenticated and is a superuser, redirects to `/admin/admin_dashboard`.
  - Otherwise, redirects to `/admin/login`.

---

### 🧩 API Structure

This documentation will be expanded with detailed information for each backend API endpoint, following this structure:

- **API Name:**  
- **Method:**  
- **Description:**  
- **URL:**  
- **Request Body (if applicable):**  
- **Success Response:**  
- **Error Response:**  

---

**Note:**  
- All admin panel CRUD and dashboard-related endpoints are handled under `/admin/` and will be documented in detail, one by one, as you provide the specifics.
- All backend form-related logic and APIs are handled under `/api/`.

---

### 📮 Contact Form API

**API Name:** Submit Contact Form  
**Method:** POST  
**URL:** `/api/submit-contact/`  
**Description:**  
Allows users to submit a contact form. The submitted data is validated and saved to the database. On success, an email notification is sent to the admin (or designated recipient). Returns a JSON response indicating success or detailing validation errors.

---

#### Request Body

Send JSON in the following format:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "message": "Hello, I would like to know more about your services."
}
```

| Field   | Type   | Required | Description                    |
|---------|--------|----------|--------------------------------|
| name    | string | Yes      | Full name of the sender        |
| email   | string | Yes      | Email address of the sender    |
| phone   | string | Yes      | Contact phone number           |
| message | string | Yes      | Message or inquiry content     |

---

#### Success Response

- **Code:** 200 OK  
- **Content:**  
  ```json
  {
    "success": true
  }
  ```

#### Error Responses

- **Validation Error:**  
  **Code:** 200 OK  
  **Content:**  
  ```json
  {
    "success": false,
    "errors": {
      "field_name": [
        "Error message for field"
      ]
    }
  }
  ```

- **Invalid Request Method:**  
  **Code:** 400 Bad Request  
  **Content:**  
  ```json
  {
    "error": "Invalid request method"
  }
  ```

---

**Notes:**
- Only accepts POST requests with a JSON body.
- All fields are required and must be valid.
- On successful submission, the message is saved and an email is sent to the administrator.
- Validation errors will specify which fields need correction.

---
### 🚚 Delivery Partner Form API

**API Name:** Submit Delivery Partner Form  
**Method:** POST  
**URL:** `/api/submit-delivery-partner/`  
**Description:**  
Allows delivery partners to submit their onboarding details. The data is validated and saved to the database. On successful submission, a notification email is sent. Returns a JSON response indicating success or validation errors.

---

#### Request Body

Send JSON in the following format:

```json
{
  "name": "Rahul Sharma",
  "phone": "9876543210",
  "email": "rahul@example.com",
  "dob": "1990-05-20",
  "gender": "male",
  "address": "123 Main Street, City",
  "city": "Mumbai",
  "pincode": "400001",
  "has_license": "yes",
  "vehicle": "two_wheeler"
}
```

| Field        | Type   | Required | Description                                      | Choices                                  |
|--------------|--------|----------|--------------------------------------------------|------------------------------------------|
| name         | string | Yes      | Full name of the delivery partner                |                                          |
| phone        | string | Yes      | Contact number (10 digits)                       |                                          |
| email        | string | Yes      | Email address                                    |                                          |
| dob          | string | Yes      | Date of birth (`YYYY-MM-DD`)                     |                                          |
| gender       | string | Yes      | Gender of the partner                            | `male`, `female`, `other`                |
| address      | string | Yes      | Complete address                                 |                                          |
| city         | string | Yes      | City                                             |                                          |
| pincode      | string | Yes      | Area pincode (6 digits)                          |                                          |
| has_license  | string | Yes      | Whether has a driving license                    | `yes`, `no`                              |
| vehicle      | string | Yes      | Type of vehicle                                  | `two_wheeler`, `four_wheeler`, `commercial`, `no_vehicle` |

---

#### Success Response

- **Code:** 200 OK  
- **Content:**  
  ```json
  {
    "success": true
  }
  ```

#### Error Responses

- **Validation Error:**  
  **Code:** 200 OK  
  **Content:**  
  ```json
  {
    "success": false,
    "errors": {
      "field_name": [
        "Error message for field"
      ]
    }
  }
  ```

- **Invalid Request Method:**  
  **Code:** 400 Bad Request  
  **Content:**  
  ```json
  {
    "error": "Invalid request method"
  }
  ```

---

**Notes:**
- Only accepts POST requests with the body in JSON format.
- All fields are required and must follow the specified format and allowed choices.
- On successful submission, the details are stored and a notification email is sent.
- Validation errors will specify which fields need to be corrected.

---
### 🏪 Shop Owner Registration API

**API Name:** Submit Shop Owner Registration  
**Method:** POST  
**URL:** `/api/submit-shop-owner/`  
**Description:**  
Allows shop owners to register their shop by submitting all required details. Data is validated and saved to the database. On successful submission, a notification email is sent. Returns a JSON response indicating success or validation errors.

---

#### Request Body

Send JSON in the following format:

```json
{
  "name": "Amit Kumar",
  "phone": "9876543210",
  "email": "amit@example.com",
  "shop_name": "Amit's Mart",
  "address": "45 Main Road, City Center",
  "city": "Delhi",
  "pincode": "110001",
  "shop_category": "local_store",
  "id_proof": "yes",
  "shop_docs": "yes"
}
```

| Field         | Type   | Required | Description                             | Choices                            |
|---------------|--------|----------|-----------------------------------------|------------------------------------|
| name          | string | Yes      | Full name of the shop owner             |                                    |
| phone         | string | Yes      | Contact number (10 digits)              |                                    |
| email         | string | Yes      | Email address                           |                                    |
| shop_name     | string | Yes      | Name of the shop                        |                                    |
| address       | string | Yes      | Shop address                            |                                    |
| city          | string | Yes      | City where the shop is located          |                                    |
| pincode       | string | Yes      | Area pincode (6 digits)                 |                                    |
| shop_category | string | Yes      | Category of the shop                    | `franchise`, `local_store`, `brand`|
| id_proof      | string | Yes      | Whether ID proof is provided            | `yes`, `no`                        |
| shop_docs     | string | Yes      | Whether shop documents are provided     | `yes`, `no`                        |

---

#### Success Response

- **Code:** 200 OK  
- **Content:**  
  ```json
  {
    "success": true
  }
  ```

#### Error Responses

- **Validation Error:**  
  **Code:** 400 Bad Request  
  **Content:**  
  ```json
  {
    "success": false,
    "errors": {
      "field_name": [
        "Error message for field"
      ]
    }
  }
  ```

- **Invalid Request:**  
  **Code:** 400 Bad Request  
  **Content:**  
  ```json
  {
    "error": "Invalid request"
  }
  ```

---

**Notes:**
- Only accepts POST requests with the body in JSON format.
- All fields are required and must follow the specified format and allowed choices.
- On successful submission, the details are stored and a notification email is sent.
- Validation errors will specify which fields need to be corrected.

---

### 👤 App User Registration API

**API Name:** Submit App User Registration  
**Method:** POST  
**URL:** `/api/submit-app-user/`  
**Description:**  
Allows users to register as App Users by submitting their details. The data is validated and, upon successful validation, saved to the database. An email notification is sent out on successful registration. Returns a JSON response indicating success or listing any validation errors.

---

#### Request Body

Send JSON in the following format:

```json
{
  "name": "Priya Singh",
  "email": "priya@example.com",
  "phone": "9123456789",
  "gender": "female"
}
```

| Field   | Type   | Required | Description                     | Choices                      |
|---------|--------|----------|---------------------------------|------------------------------|
| name    | string | Yes      | Full name of the user           |                              |
| email   | string | Yes      | Email address (must be unique)  |                              |
| phone   | string | Yes      | Phone number (10 digits, unique)|                              |
| gender  | string | Yes      | User's gender                   | `male`, `female`, `other`    |

---

#### Success Response

- **Code:** 200 OK  
- **Content:**  
  ```json
  {
    "success": true
  }
  ```

#### Error Responses

- **Validation Error:**  
  **Code:** 200 OK  
  **Content:**  
  ```json
  {
    "success": false,
    "errors": {
      "field_name": [
        "Error message for field"
      ]
    }
  }
  ```

- **Invalid Request:**  
  **Code:** 200 OK  
  **Content:**  
  ```json
  {
    "success": false,
    "error": "Invalid request"
  }
  ```

---

**Notes:**
- Only accepts POST requests with the body in JSON format.
- All fields are required and must be valid.
- Both `email` and `phone` must be unique in the system.
- On successful submission, the user is stored and a notification email is sent.
- Validation errors will specify which fields need correction.

---
### 📝 Seller Survey API

**API Name:** Submit Seller Survey  
**Method:** POST  
**URL:** `/api/submit-survey/`  
**Description:**  
Allows sellers to submit a comprehensive business survey. All fields are validated and the data is saved to the database. On success, a JSON response is returned.

---

#### Request Body

Send form-data or JSON in this format (all fields are required unless specified):

```json
{
  "name": "Vijay Traders",
  "business_name": "Vijay Traders",
  "phone": "9812345678",
  "city": "Pune",
  "state": "Maharashtra",
  "category": "Groceries and General Stores",
  "has_website": "Yes",
  "sales_affected_by_ecommerce": "No",
  "affected_by_deep_discounting": "Yes",
  "years_in_business": "5",
  "repeat_customers_percentage": "60",
  "willing_to_sell_on_platform": "Yes",
  "willing_to_offer_promotions": "Yes",
  "advertises_store": "No",
  "uses_inventory_software": "Yes",
  "customer_relationship_rating": 5,
  "noticed_loyalty_change": "No",
  "payment_methods": "All",
  "stock_update_frequency": "3 months",
  "competitive_advantage": "Quality",
  "unique_products": "Yes",
  "registered_marketplaces": "No",
  "discounts_to_retain": "Yes",
  "store_projection": "Sales will remain same or increase",
  "profit_margin": "12.50",
  "has_gst": "Yes",
  "charging_gst": "Yes"
}
```

| Field                              | Type    | Required | Description                                                        | Choices (if applicable)                  |
|-------------------------------------|---------|----------|--------------------------------------------------------------------|------------------------------------------|
| name                               | string  | Yes      | Seller's full name                                                 |                                          |
| business_name                      | string  | Yes      | Name of the business                                               |                                          |
| phone                              | string  | Yes      | Contact phone (unique)                                             |                                          |
| city                               | string  | Yes      | City name                                                          |                                          |
| state                              | string  | Yes      | State                                                              | *See below for valid states*             |
| category                           | string  | Yes      | Business category                                                  | *See below for valid categories*         |
| has_website                        | string  | Yes      | Do you have a website?                                             | Yes, No                                  |
| sales_affected_by_ecommerce        | string  | Yes      | Has sales decreased due to e-commerce platforms?                   | Yes, No                                  |
| affected_by_deep_discounting       | string  | Yes      | Affected by deep discounting?                                      | Yes, No                                  |
| years_in_business                  | string  | Yes      | Number of years in business                                        |                                          |
| repeat_customers_percentage        | string  | Yes      | Repeat customers percentage (%)                                    |                                          |
| willing_to_sell_on_platform        | string  | Yes      | Willing to sell on platform?                                       | Yes, No                                  |
| willing_to_offer_promotions        | string  | Yes      | Willing to offer discounts/promotions?                             | Yes, No                                  |
| advertises_store                   | string  | Yes      | Do you advertise your store/products?                              | Yes, No                                  |
| uses_inventory_software            | string  | Yes      | Using software for inventory/sales management?                     | Yes, No                                  |
| customer_relationship_rating       | int     | Yes      | Rate relationship with customers (1-5)                             | 1, 2, 3, 4, 5                            |
| noticed_loyalty_change             | string  | Yes      | Noticed changes in customer loyalty?                               | Yes, No                                  |
| payment_methods                    | string  | Yes      | Accepted payment methods                                           | Cash, Cash / UPI, Debit / Credit card, All |
| stock_update_frequency             | string  | Yes      | How often is stock updated?                                        | 1/2/3/4/6/12 months                      |
| competitive_advantage              | string  | Yes      | Main competitive advantage                                         | Low price, Quality, Goodwill, etc.       |
| unique_products                    | string  | Yes      | Offer unique products/services?                                    | Yes, No                                  |
| registered_marketplaces            | string  | Yes      | Registered on any online marketplaces?                             | Yes, No                                  |
| discounts_to_retain                | string  | Yes      | Offer discounts to retain customers?                               | Yes, No                                  |
| store_projection                   | string  | Yes      | Projected store condition if not online                            | Sales will remain same or increase, Will lead to closure of business |
| profit_margin                      | decimal | Yes      | Profit margin (%)                                                  | 0.00 - 100.00                            |
| has_gst                            | string  | Yes      | Do you have GST number?                                            | Yes, No                                  |
| charging_gst                       | string  | Yes      | Are you charging GST from customers?                               | Yes, No                                  |

**State Choices:**  
Andhra Pradesh, Arunachal Pradesh, Assam, Bihar, Chhattisgarh, Goa, Gujarat, Haryana, Himachal Pradesh, Jharkhand, Karnataka, Kerala, Madhya Pradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, Odisha, Punjab, Rajasthan, Sikkim, Tamil Nadu, Telangana, Tripura, Uttar Pradesh, Uttarakhand, West Bengal, Andaman and Nicobar Islands, Chandigarh, Dadra and Nagar Haveli and Daman and Diu, Lakshadweep, Delhi (National Capital Territory), Puducherry, Jammu and Kashmir, Ladakh

**Category Choices:**  
See full list in model code above, e.g., "Groceries and General Stores", "Electronics and Gadgets", etc.

---

#### Success Response

- **Code:** 200 OK  
- **Content:**  
  ```json
  {
    "success": true
  }
  ```

#### Error Responses

- **Validation Error:**  
  **Code:** 400 Bad Request  
  **Content:**  
  ```json
  {
    "success": false,
    "errors": {
      "field_name": [
        "Error message for field"
      ]
    }
  }
  ```

---

**Notes:**
- Only accepts POST requests; form-data or JSON is accepted.
- All fields are required and must be valid.
- On successful submission, the survey is saved.
- Validation errors will specify which fields need correction.

---

### 🧾 Buyer Survey API

**API Name:** Submit Buyer Survey  
**Method:** POST  
**URL:** `/api/survey/`  
**Description:**  
Allows buyers to submit a comprehensive survey about their shopping habits, preferences, and opinions on local vs. online shopping. Multi-choice fields (checkboxes) are accepted and stored as comma-separated strings. The data is validated and saved to the database. Returns a JSON response indicating success or validation errors.

---

#### Request Body

Send as `form-data` or URL-encoded POST data. Use arrays for multi-choice fields.

```json
{
  "buyer_name": "Anjali Mahajan",
  "buyer_phone": "98xxxxxxxx",
  "buyer_city": "Jaipur",
  "buyer_state": "Rajasthan",
  "buyer_shopping_preference": "Online",
  "buyer_influence_factors": ["Price", "Convenience", "Product variety"],
  "buyer_local_shopping_challenges": ["High price", "Less convenience"],
  "buyer_local_store_expectations": "Yes",
  "buyer_store_relationship_importance": "4",
  "buyer_online_attraction": ["Discount", "Variety"],
  "buyer_online_replacement": "Partially",
  "buyer_local_vs_online_competition": "Yes",
  "buyer_local_store_suffering": "Yes",
  "buyer_support_local_importance": "Yes",
  "buyer_digital_platform_inclination": "Yes",
  "buyer_expected_digital_features": ["Product variety", "Easy browsing", "Fast delivery"],
  "buyer_trust_in_quality": "Offline",
  "buyer_after_sales_experience": "Local stores",
  "buyer_local_payment_preference": "Cash"
}
```

##### **Key Multi-Select Fields** (send as arrays):
- `buyer_influence_factors`
- `buyer_local_shopping_challenges`
- `buyer_online_attraction`
- `buyer_expected_digital_features`

| Field                            | Type    | Required | Description                                                              | Choices (if applicable)    |
|-----------------------------------|---------|----------|--------------------------------------------------------------------------|----------------------------|
| buyer_name                       | string  | Yes      | Buyer's full name                                                        |                            |
| buyer_phone                      | string  | Yes      | Phone number (unique)                                                    |                            |
| buyer_city                       | string  | Yes      | City name                                                                |                            |
| buyer_state                      | string  | Yes      | State                                                                    | *See below                 |
| buyer_shopping_preference        | string  | Yes      | Shopping preference (Online/Offline)                                     | Online, Offline            |
| buyer_influence_factors          | array   | Yes      | Factors influencing shopping (checkboxes, multi-select)                  | See model                  |
| buyer_local_shopping_challenges  | array   | Yes      | Challenges faced in local shopping (checkboxes, multi-select)            | See model                  |
| buyer_local_store_expectations   | string  | Yes      | Are local stores meeting expectations?                                   | Yes, No, Sometimes         |
| buyer_store_relationship_importance | string| Yes      | Importance of store-owner relationship (1–5)                             | 1, 2, 3, 4, 5              |
| buyer_online_attraction          | array   | Yes      | Attractive features of online platforms (checkboxes, multi-select)       | See model                  |
| buyer_online_replacement         | string  | Yes      | Online replaced local shopping?                                          | Yes, No, Partially         |
| buyer_local_vs_online_competition| string  | Yes      | Can local stores compete with online?                                    | Yes, No                    |
| buyer_local_store_suffering      | string  | Yes      | Are local stores suffering due to e-commerce?                            | Yes, No, Not sure          |
| buyer_support_local_importance   | string  | Yes      | Is supporting local businesses important?                                | Yes, No                    |
| buyer_digital_platform_inclination| string | Yes      | Would shop more from locals via digital platform?                        | Yes, No                    |
| buyer_expected_digital_features  | array   | Yes      | Expected features in a digital local shopping platform (multi-select)    | See model                  |
| buyer_trust_in_quality           | string  | Yes      | Whom do you trust for quality?                                           | Offline, Online            |
| buyer_after_sales_experience     | string  | Yes      | Where better after-sales service experienced?                            | Local stores, Online stores|
| buyer_local_payment_preference   | string  | Yes      | Preferred payment method locally                                         | Cash, Cash/UPI, Card, Pay later |

**State Choices:**  
Andhra Pradesh, Arunachal Pradesh, Assam, Bihar, Chhattisgarh, Goa, Gujarat, Haryana, Himachal Pradesh, Jharkhand, Karnataka, Kerala, Madhya Pradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, Odisha, Punjab, Rajasthan, Sikkim, Tamil Nadu, Telangana, Tripura, Uttar Pradesh, Uttarakhand, West Bengal, Andaman and Nicobar Islands, Chandigarh, Dadra and Nagar Haveli and Daman and Diu, Lakshadweep, Delhi (National Capital Territory), Puducherry, Jammu and Kashmir, Ladakh

---

#### Success Response

- **Code:** 200 OK  
- **Content:**  
  ```json
  {
    "success": true
  }
  ```

#### Error Responses

- **Validation Error:**  
  **Code:** 400 Bad Request  
  **Content:**  
  ```json
  {
    "success": false,
    "errors": {
      "field_name": [
        "Error message for field"
      ]
    }
  }
  ```

---

**Notes:**
- Only accepts POST requests.
- Multi-choice/checkbox fields must be sent as arrays; backend will store them as comma-separated strings.
- All fields are required; see choices above and in the model.
- On success, the survey is saved to the database. Validation errors specify which fields need correction.

---

## 🛡️ Admin Panel API Documentation

This section documents all API endpoints related to the **Admin Panel** of the Trjara platform.  
All endpoints in this section are prefixed with `/admin/`.

---

### Introduction

The Admin Panel is a custom dashboard designed for authorized staff and admin users to manage, review, and perform actions on data collected from the website. Unlike Django's default admin panel, this interface is tailored for business and operational workflows, giving admins a more user-friendly and functional experience.

**Key Points:**
- **No unique models are defined in the `admin_panel` app's `models.py`.**
- The Admin Panel works with models defined in the `backend` app (such as Contact Messages, Delivery Partners, Shop Owners, App Users, and Surveys).
- All data showcased and managed here is collected from user-facing forms and APIs.
- The Admin Panel provides endpoints for CRUD operations (view, filter, update, delete, etc.) for each model defined in the backend.
- All admin panel-related API endpoints begin with the `/admin/` prefix.

---

**In this section, you will find:**
- API endpoints for listing, viewing, editing, or deleting user-submitted data (e.g., contacts, partners, shop owners, users, surveys).
- Request and response formats for each endpoint.
- Usage details for integrating with the custom admin dashboard UI.

---
#### Admin Dashboard

**API Name:** Admin Dashboard  
**Method:** GET  
**URL:** `/admin/admin_dashboard/`  
**Description:**  
Renders the main dashboard page for the custom admin panel. This view is protected with the `@superuser_required` decorator, ensuring that only authenticated superusers can access it. The dashboard provides a central interface for viewing and managing all data collected from the website (contacts, delivery partners, shop owners, users, surveys, etc.).

---

#### Request

- **Method:** GET  
- **Headers:**  
  - Must be authenticated as a superuser (session or appropriate authentication method).

---

#### Success Response

- **Code:** 200 OK  
- **Content:**  
  Returns the rendered HTML page: `admin_panel/admin_dashboard.html` (not JSON).

---

#### Error Responses

- **Unauthorized/Forbidden:**  
  - If the user is not authenticated or not a superuser, access is denied (typically redirects to the login page or returns a 403 Forbidden).

---

**Notes:**
- This route is for web interface rendering only, not for JSON API calls.
- All admin management features and analytics begin from this dashboard page.
- Protected by custom `@superuser_required` decorator for enhanced security.

---

#### Admin Login

**API Name:** Admin Login  
**Method:** GET  
**URL:** `/admin/login/`  
**Description:**  
Displays the custom admin panel login page. If a user is already authenticated and is a superuser, they are redirected directly to the admin dashboard. Otherwise, the login form is rendered for credential entry.

---

#### Request

- **Method:** GET  
- **Headers:**  
  - If the user is already authenticated and is a superuser, they will be redirected to `/admin/admin_dashboard/`.

---

#### Success Response

- **Code:** 200 OK  
- **Content:**  
  Returns the rendered HTML page: `admin_panel/login.html` (not JSON).

---

#### Redirect

- **If already logged in as superuser:**  
  Redirects to `/admin/admin_dashboard/`

---

#### Error Responses

- **None:**  
  - This endpoint only renders a page or redirects; form validation and authentication errors are handled in the POST/login logic (not shown here).

---

**Notes:**
- This endpoint is for web interface rendering only, not for JSON API calls.
- Protected so only superusers can reach the dashboard; others are shown the login page.

---

### Admin Login (API)

**API Name:** Admin Login (API)  
**Method:** POST  
**URL:** `/admin/admin-login/`  
**Description:**  
Authenticates an admin (superuser) via API. Accepts credentials and, if correct, logs in the user and starts a session with an optional "remember me" feature. Returns a JSON response with success status and redirect URL or error message.

#### Request Body

Send JSON in the following format:

```json
{
  "username": "adminuser",
  "password": "password123",
  "remember_me": true
}
```

| Field        | Type    | Required | Description                                                        |
|--------------|---------|----------|--------------------------------------------------------------------|
| username     | string  | Yes      | Admin username (must be a superuser)                               |
| password     | string  | Yes      | Password                                                           |
| remember_me  | boolean | No       | If true, session lasts 2 weeks; if false or omitted, 24 hours      |

---

#### Success Response

- **Code:** 200 OK  
- **Content:**  
  ```json
  {
    "success": true,
    "redirect_url": "/admin/admin_dashboard/"
  }
  ```

#### Error Responses

- **Invalid Credentials (or not a superuser):**  
  **Code:** 401 Unauthorized  
  **Content:**  
  ```json
  {
    "success": false,
    "message": "Invalid credentials or not authorized"
  }
  ```

- **Invalid Request Method:**  
  **Code:** 400 Bad Request  
  **Content:**  
  ```json
  {
    "error": "Invalid request"
  }
  ```

---

### Admin Logout

**API Name:** Admin Logout  
**Method:** GET  
**URL:** `/admin/logout/`  
**Description:**  
Logs out the currently authenticated admin user and redirects to the admin login page.

#### Success Response

- **Code:** 302 Redirect  
- **Redirects To:** `/admin/login/`

---

**Notes:**
- The login API is intended for use by the custom admin panel frontend (not for browser login forms).
- Only superusers are permitted to log in via this API; other users will be rejected.
- "Remember me" controls session expiry: 2 weeks if true, 24 hours otherwise.
- Logout always redirects to the login page.

---

### Update Admin Profile

**API Name:** Update Admin Profile  
**Method:** POST  
**URL:** `/admin/update-profile/`  
**Description:**  
Allows a logged-in superuser (admin) to update their own profile information (first name, last name, and email). Only authenticated superusers can use this endpoint. Returns a JSON response indicating success or an error if unauthorized.

---

#### Request Body

Send JSON in the following format:

```json
{
  "first_name": "Pranav",
  "last_name": "Sharma",
  "email": "pranav@example.com"
}
```

| Field       | Type   | Required | Description                      |
|-------------|--------|----------|----------------------------------|
| first_name  | string | No       | Admin's first name               |
| last_name   | string | No       | Admin's last name                |
| email       | string | No       | Admin's email address            |

---

#### Success Response

- **Code:** 200 OK  
- **Content:**  
  ```json
  {
    "success": true
  }
  ```

#### Error Response

- **Unauthorized/Forbidden:**  
  **Code:** 403 Forbidden  
  **Content:**  
  ```json
  {
    "error": "Unauthorized"
  }
  ```

---

**Notes:**
- Only accessible by logged-in superusers (admins).
- The API updates the profile for the currently logged-in admin user only.
- If the user is not authenticated or not a superuser, returns a 403 error.

---

### Change Admin Password

**API Name:** Change Admin Password  
**Method:** POST  
**URL:** `/admin/change-password/`  
**Description:**  
Allows a logged-in superuser (admin) to change their password. Only authenticated superusers can use this endpoint. The new password must be confirmed by entering it twice. Returns a JSON response indicating success or an error if unauthorized or if the passwords do not match.

---

#### Request Body

Send JSON in the following format:

```json
{
  "new_password": "newStrongPass123",
  "confirm_password": "newStrongPass123"
}
```

| Field           | Type   | Required | Description                  |
|-----------------|--------|----------|------------------------------|
| new_password    | string | Yes      | The new password             |
| confirm_password| string | Yes      | Re-enter the new password    |

---

#### Success Response

- **Code:** 200 OK  
- **Content:**  
  ```json
  {
    "success": true
  }
  ```

#### Error Responses

- **Passwords do not match:**  
  **Code:** 400 Bad Request  
  **Content:**  
  ```json
  {
    "success": false,
    "error": "Passwords do not match"
  }
  ```

- **Unauthorized/Forbidden:**  
  **Code:** 403 Forbidden  
  **Content:**  
  ```json
  {
    "error": "Unauthorized"
  }
  ```

---

**Notes:**
- Only accessible by logged-in superusers (admins).
- Both password fields must be identical; otherwise, an error is returned.
- If the user is not authenticated or not a superuser, returns a 403 error.

---
### Get Dashboard Counts

**API Name:** Get Dashboard Counts  
**Method:** GET  
**URL:** `/admin/dashboard-counts/`  
**Description:**  
Returns summary statistics for key entities in the system to display on the admin dashboard. Counts include total inquiries, users, shop owners, and delivery partners. Only accessible by authenticated admin users.

---

#### Success Response

- **Code:** 200 OK  
- **Content:**  
  ```json
  {
    "total_inquiries": 124,
    "total_users": 500,
    "total_shops": 42,
    "total_delivery": 7
  }
  ```

| Field             | Type   | Description                       |
|-------------------|--------|-----------------------------------|
| total_inquiries   | int    | Total number of contact messages  |
| total_users       | int    | Total number of app users         |
| total_shops       | int    | Total number of shop owners       |
| total_delivery    | int    | Total number of delivery partners |

---

#### Error Responses

- **Unauthorized/Forbidden:**  
  - If the user is not authenticated, a 302 redirect to login or 403 Forbidden may be returned (handled by `@login_required`).

---

**Notes:**
- Intended for use by the admin dashboard to show quick stats.
- All counts are calculated using the corresponding model from the backend.
- No input parameters are required.

---
### Seller Survey Graph Data

**API Name:** Survey Graph Data  
**Method:** GET  
**URL:** `/admin/survey-graph-data/`  
**Description:**  
Returns the seller survey submission counts for each of the last 15 days (including today). Useful for displaying a time-series graph/chart on the admin dashboard.

---

#### Success Response

- **Code:** 200 OK  
- **Content:**  
  ```json
  {
    "dates": [
      "2025-05-29",
      "2025-05-30",
      "2025-05-31",
      "2025-06-01",
      "2025-06-02",
      "2025-06-03",
      "2025-06-04",
      "2025-06-05",
      "2025-06-06",
      "2025-06-07",
      "2025-06-08",
      "2025-06-09",
      "2025-06-10",
      "2025-06-11",
      "2025-06-12"
    ],
    "counts": [
      0, 1, 2, 0, 3, 0, 0, 5, 1, 0, 0, 2, 1, 0, 0
    ]
  }
  ```

| Field   | Type   | Description                                           |
|---------|--------|-------------------------------------------------------|
| dates   | array  | List of date strings (`YYYY-MM-DD`) for last 15 days  |
| counts  | array  | Number of seller survey submissions for each date     |

---

#### Notes

- This endpoint is intended for visualizing seller survey activity trends.
- The `counts` array aligns with the `dates` array by index.
- If no submissions exist for a date, the count will be `0`.

---

### Buyers Survey Graph Data

**API Name:** Buyers Survey Graph Data  
**Method:** GET  
**URL:** `/admin/buyers-graph-data/`  
**Description:**  
Returns the buyer survey submission counts for each of the last 15 days (including today). Useful for displaying a time-series graph/chart on the admin dashboard.

---

#### Success Response

- **Code:** 200 OK  
- **Content:**  
  ```json
  {
    "dates": [
      "2025-05-29",
      "2025-05-30",
      "2025-05-31",
      "2025-06-01",
      "2025-06-02",
      "2025-06-03",
      "2025-06-04",
      "2025-06-05",
      "2025-06-06",
      "2025-06-07",
      "2025-06-08",
      "2025-06-09",
      "2025-06-10",
      "2025-06-11",
      "2025-06-12"
    ],
    "counts": [
      0, 2, 1, 0, 3, 1, 0, 4, 2, 0, 1, 3, 1, 0, 0
    ]
  }
  ```

| Field   | Type   | Description                                           |
|---------|--------|-------------------------------------------------------|
| dates   | array  | List of date strings (`YYYY-MM-DD`) for last 15 days  |
| counts  | array  | Number of buyer survey submissions for each date      |

---

#### Notes

- This endpoint is intended for visualizing buyer survey activity trends.
- The `counts` array aligns with the `dates` array by index.
- If no submissions exist for a date, the count will be `0`.

---

### App Users Management (Admin Panel)

#### 1. List & Retrieve App Users

**API Name:** List & Retrieve App Users  
**Method:** GET  
**URL:** `/admin/users/`  
**Description:**  
Returns a paginated list of app users or a single user's details if an `id` is provided. Filter by gender if required.

**Query Parameters:**
- `id` (optional): If provided, returns only the user with this ID.
- `gender` (optional): Filter users by gender (`Male`, `Female`, etc).
- `page` (optional): Page number for pagination (default: 1).

**Example:**
- `/admin/users/?page=2&gender=Male`
- `/admin/users/?id=42`

**Success Response (List):**
```json
{
  "users": [
    {
      "id": 1,
      "name": "Shreya Singh",
      "email": "shreya@example.com",
      "phone": "9876543210",
      "gender": "Female"
    }
    // ...up to 5 users per page
  ],
  "total_pages": 10,
  "page": 2
}
```

**Success Response (Single User):**
```json
{
  "id": 42,
  "name": "Rohan Kumar",
  "email": "rohan@example.com",
  "phone": "9123456789",
  "gender": "Male"
}
```

**Error Response (User Not Found):**
```json
{
  "error": "User not found"
}
```

---

#### 2. Update App User

**API Name:** Update App User  
**Method:** POST  
**URL:** `/admin/users/update/`  
**Description:**  
Updates an app user's details. Expects data as POST form data.

**POST Body:**
- `id` (required): User ID
- `name` (required): Name
- `email` (required): Email
- `phone` (required): Phone
- `gender` (required): Gender

**Success Response:**
```json
{
  "success": true
}
```

**Error Responses:**
```json
{
  "success": false,
  "error": "User not found"
}
```
or
```json
{
  "success": false,
  "error": "Invalid request"
}
```

---

#### 3. Delete App User

**API Name:** Delete App User  
**Method:** POST  
**URL:** `/admin/users/delete/`  
**Description:**  
Deletes an app user. Expects JSON in the request body.

**JSON Body:**
```json
{
  "id": 42
}
```

**Success Response:**
```json
{
  "success": true
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "User not found"
}
```

---

#### 4. Download App Users CSV

**API Name:** Download App Users CSV  
**Method:** GET  
**URL:** `/admin/users/download/`  
**Description:**  
Downloads a CSV of all app users, optionally filtered by gender.

**Query Parameters:**
- `gender` (optional): Filter users by gender in the CSV.

**Response:**  
- Returns a downloadable CSV file (`app_users.csv`) with columns: Name, Email, Phone, Gender.

---

**Notes:**
- All endpoints are intended for use in the custom admin panel.
- Pagination: 5 users per page in the list endpoint.
- Download endpoint returns CSV, not JSON.
- Update expects form-encoded data; delete expects JSON.
- For all endpoints, proper authentication/authorization is assumed.

---

### Shop Owners Management (Admin Panel)

#### 1. Filter & List Shop Owners

**API Name:** Filter & List Shop Owners  
**Method:** GET  
**URL:** `/admin/shop-users/filtered/`  
**Description:**  
Returns a paginated list of shop owners with optional filters for category and document status.

**Query Parameters:**
- `page` (optional): Page number for pagination (default: 1)
- `category` (optional): Filter by shop category (exact value)
- `shop_docs` (optional): "yes" (has docs) or "no" (no docs)
- `id_proof` (optional): "yes" (has ID proof) or "no" (no ID proof)

**Example:**  
`/admin/shop-users/filtered/?category=electronics&shop_docs=yes&id_proof=no&page=2`

**Success Response:**
```json
{
  "users": [
    {
      "id": 5,
      "name": "Amit Verma",
      "email": "amit@example.com",
      "phone": "9876543210",
      "shop_name": "Verma Electronics",
      "shop_category": "Electronics"
    }
    // ...up to 5 users per page
  ],
  "total_pages": 3,
  "page": 2
}
```

---

#### 2. Get Shop Owner Details

**API Name:** Get Shop Owner Details  
**Method:** GET  
**URL:** `/admin/shop-users/details/`  
**Description:**  
Returns detailed information for a single shop owner.

**Query Parameters:**
- `id` (required): Shop owner's ID

**Example:**  
`/admin/shop-users/details/?id=5`

**Success Response:**
```json
{
  "id": 5,
  "name": "Amit Verma",
  "email": "amit@example.com",
  "phone": "9876543210",
  "shop_name": "Verma Electronics",
  "shop_category": "Electronics",
  "address": "123 Main Rd",
  "city": "Jaipur",
  "pincode": "302018",
  "id_proof": "proof.jpg",
  "shop_docs": "docs.pdf",
  "created_at": "2025-06-10 13:45:22"
}
```

**Error Response:**
```json
{
  "error": "User not found"
}
```

---

#### 3. Delete Shop Owner

**API Name:** Delete Shop Owner  
**Method:** POST  
**URL:** `/admin/shop-users/delete/`  
**Description:**  
Deletes a shop owner by ID. Expects JSON body.

**JSON Body:**
```json
{
  "id": 5
}
```

**Success Response:**
```json
{
  "success": true
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "User not found"
}
```

---

#### 4. Download Shop Owners CSV

**API Name:** Download Shop Owners CSV  
**Method:** GET  
**URL:** `/admin/shop-users/download/`  
**Description:**  
Downloads a CSV report of all shop owners with optional filters.

**Query Parameters:**
- `category` (optional): Filter by shop category
- `shop_docs` (optional): "yes" or "no" (filter by presence of shop documents)
- `id_proof` (optional): "yes" or "no" (filter by presence of ID proof)

**CSV Columns:**  
Name, Email, Phone, Shop Name, Category, Address, City, Pincode, ID Proof (Yes/No), Shop Docs (Yes/No), Created At

**Response:**  
- Returns a downloadable CSV file (`shop_users.csv`).

---

**Notes:**
- Pagination: 5 users per page in the filtered list.
- CSV export includes all filtered users.
- For all endpoints, proper authentication/authorization is assumed.

---

### Delivery Partners Management (Admin Panel)

#### 1. List & Filter Delivery Partners

**API Name:** List & Filter Delivery Partners  
**Method:** GET  
**URL:** `/admin/delivery-partners/`  
**Description:**  
Returns a paginated list of delivery partners, with optional filters for gender, vehicle type, and license status.

**Query Parameters:**
- `page` (optional): Page number for pagination (default: 1)
- `gender` (optional): Filter by gender (e.g., "Male", "Female")
- `vehicle` (optional): Filter by vehicle type (exact value, e.g., "bike")
- `has_license` (optional): Filter by license status (`true` or `false` as string)

**Example:**  
`/admin/delivery-partners/?gender=Male&vehicle=bike&has_license=true&page=2`

**Success Response:**
```json
{
  "partners": [
    {
      "id": 7,
      "name": "Suresh Kumar",
      "phone": "9876543210",
      "email": "suresh@example.com",
      "gender": "Male",
      "vehicle": "Bike"
    }
    // ...up to 5 partners per page
  ],
  "page": 2,
  "total_pages": 3
}
```

---

#### 2. Get Delivery Partner Details

**API Name:** Get Delivery Partner Details  
**Method:** GET  
**URL:** `/admin/delivery-partners/details/`  
**Description:**  
Returns detailed information for a single delivery partner.

**Query Parameters:**
- `id` (required): Delivery partner's ID

**Example:**  
`/admin/delivery-partners/details/?id=7`

**Success Response:**
```json
{
  "name": "Suresh Kumar",
  "phone": "9876543210",
  "email": "suresh@example.com",
  "dob": "1995-06-10",
  "gender": "Male",
  "address": "123 Main Rd",
  "city": "Delhi",
  "pincode": "110001",
  "has_license": true,
  "vehicle": "Bike",
  "submitted_at": "2025-06-10 13:45"
}
```

**Error Response:**
```json
{
  "error": "Not found"
}
```

---

#### 3. Delete Delivery Partner

**API Name:** Delete Delivery Partner  
**Method:** POST  
**URL:** `/admin/delivery-partners/delete/`  
**Description:**  
Deletes a delivery partner by ID. Expects JSON in the request body.

**JSON Body:**
```json
{
  "id": 7
}
```

**Success Response:**
```json
{
  "success": true
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Not found"
}
```

---

#### 4. Export Delivery Partners CSV

**API Name:** Export Delivery Partners CSV  
**Method:** GET  
**URL:** `/admin/delivery-partners/export-csv/`  
**Description:**  
Downloads a CSV file of all delivery partners, optionally filtered by gender, vehicle type, and license status.

**Query Parameters:**
- `gender` (optional): Filter by gender
- `vehicle` (optional): Filter by vehicle type
- `has_license` (optional): Filter by license status (`true` or `false` as string)

**CSV Columns:**  
Name, Phone, Email, DOB, Gender, Address, City, Pincode, Has License, Vehicle, Submitted At

**Response:**  
- Returns a downloadable CSV file (`delivery_partners.csv`).

---

**Notes:**
- Pagination: 5 delivery partners per page in the list endpoint.
- Vehicle names and categories are human-readable.
- For all endpoints, proper authentication/authorization is assumed.

---

### Contact Messages Management (Admin Panel)

#### 1. List Contact Messages

**API Name:** List Contact Messages  
**Method:** GET  
**URL:** `/admin/contact-messages/`  
**Description:**  
Returns a paginated list of contact messages submitted by users.

**Query Parameters:**
- `page` (optional): Page number for pagination (default: 1)

**Success Response:**
```json
{
  "messages": [
    {
      "id": 101,
      "name": "Priya Kapoor",
      "email": "priya@example.com",
      "phone": "9876543210"
    }
    // ...up to 5 messages per page
  ],
  "page": 1,
  "total_pages": 3
}
```

---

#### 2. Get Contact Message Details

**API Name:** Get Contact Message Details  
**Method:** GET  
**URL:** `/admin/contact-messages/details/`  
**Description:**  
Returns the details of a single contact message.

**Query Parameters:**
- `id` (required): Message ID

**Example:**  
`/admin/contact-messages/details/?id=101`

**Success Response:**
```json
{
  "id": 101,
  "name": "Priya Kapoor",
  "email": "priya@example.com",
  "phone": "9876543210",
  "message": "I have a question about your services.",
  "created_at": "2025-06-11 18:05:22"
}
```

**Error Response:**
```json
{
  "error": "Not found"
}
```

---

#### 3. Delete Contact Message

**API Name:** Delete Contact Message  
**Method:** POST  
**URL:** `/admin/contact-messages/delete/`  
**Description:**  
Deletes a contact message by ID. Expects JSON body.

**JSON Body:**
```json
{
  "id": 101
}
```

**Success Response:**
```json
{
  "success": true
}
```

**Error Response:**
```json
{
  "success": false
}
```

---

**Notes:**
- Pagination: 5 messages per page in the list endpoint.
- For all endpoints, proper authentication/authorization is assumed.

---
### Seller Survey Management (Admin Panel)

#### 1. List Seller Surveys

**API Name:** List Seller Surveys  
**Method:** GET  
**URL:** `/admin/seller-survey/list/`  
**Description:**  
Returns a paginated list of seller survey submissions.

**Query Parameters:**
- `page` (optional): Page number for pagination (default: 1)

**Success Response:**
```json
{
  "surveys": [
    {
      "id": 12,
      "name": "Ravi Kumar",
      "business_name": "Kumar Electronics",
      "phone": "9876543210",
      "state": "Delhi",
      "category": "Electronics"
    }
    // ...up to 5 surveys per page
  ],
  "total_pages": 4,
  "current_page": 1
}
```

---

#### 2. Get Seller Survey Details

**API Name:** Get Seller Survey Details  
**Method:** GET  
**URL:** `/admin/seller-survey/detail/<int:pk>/`  
**Description:**  
Returns all the submitted details for a single seller survey.

**Path Parameter:**  
- `pk` (required): Survey's ID

**Success Response:**
```json
{
  "Name": "Ravi Kumar",
  "Business Name": "Kumar Electronics",
  "Phone": "9876543210",
  "City": "New Delhi",
  "State": "Delhi",
  "Category": "Electronics",
  "Has Website": "Yes",
  "Sales Affected by Ecommerce": "No",
  "Affected by Discounts": "Yes",
  "Years in Business": "10",
  "Repeat Customers %": "40",
  "Willing to Sell Online": "Yes",
  "Offers Promotions": "No",
  "Advertises Store": "Yes",
  "Uses Inventory Software": "No",
  "Customer Relationship": "5",
  "Loyalty Changed": "No",
  "Payment Methods": "UPI, Cash",
  "Stock Update Frequency": "Monthly",
  "Competitive Advantage": "Low prices",
  "Unique Products": "Some",
  "On Marketplace": "Amazon, Flipkart",
  "Discounts to Retain": "Occasionally",
  "Store Projection": "Expand",
  "Profit Margin": "10",
  "Has GST": "Yes",
  "Charging GST": "Yes"
}
```

---

#### 3. Delete Seller Survey

**API Name:** Delete Seller Survey  
**Method:** DELETE  
**URL:** `/admin/seller-survey/delete/<int:pk>/`  
**Description:**  
Deletes a seller survey response by ID.

**Path Parameter:**  
- `pk` (required): Survey's ID

**Success Response:**
```json
{
  "success": true
}
```

**Error Response:**
- `400 Bad Request` if invalid request method or survey not found.

---

#### 4. Download Seller Surveys as CSV

**API Name:** Download Seller Surveys as CSV  
**Method:** GET  
**URL:** `/admin/seller-survey/download/`  
**Description:**  
Downloads all seller survey responses as a CSV file.

**CSV Columns:**  
Name, Business Name, Phone, City, State, Category, Has Website, Sales Affected by Ecommerce, Affected by Discounts, Years in Business, Repeat Customers %, Willing to Sell Online, Offers Promotions, Advertises Store, Uses Inventory Software, Customer Relationship, Loyalty Changed, Payment Methods, Stock Update Frequency, Competitive Advantage, Unique Products, On Marketplace, Discounts to Retain, Store Projection, Profit Margin, Has GST, Charging GST

**Response:**  
- Returns a downloadable CSV file (`sellers_survey.csv`).

---

**Notes:**
- Pagination: 5 surveys per page in the list endpoint.
- For all endpoints, proper authentication/authorization is assumed.
- The details and CSV export include all survey fields submitted by sellers.

---
### Buyers Survey Management (Admin Panel)

#### 1. List Buyers Surveys

**API Name:** List Buyers Surveys  
**Method:** GET  
**URL:** `/admin/buyers-survey/list/`  
**Description:**  
Returns a paginated list of buyers survey responses.

**Query Parameters:**
- `page` (optional): Page number (default: 1, 10 surveys per page)

**Success Response:**
```json
{
  "surveys": [
    {
      "id": 21,
      "buyer_name": "Anjali Sharma",
      "buyer_phone": "9876543210",
      "buyer_state": "Delhi",
      "buyer_city": "New Delhi",
      "buyer_shopping_preference": "Online",
      "buyer_influence_factors": "Discounts, Convenience"
    }
    // ...up to 10 surveys per page
  ],
  "num_pages": 3,
  "current_page": 1
}
```

---

#### 2. Get Buyers Survey Details

**API Name:** Get Buyers Survey Details  
**Method:** GET  
**URL:** `/admin/buyers-survey/detail/<int:pk>/`  
**Description:**  
Returns all submitted details for a single buyer's survey response.

**Path Parameter:**  
- `pk` (required): Survey's ID

**Success Response:**
```json
{
  "Buyer Name": "Anjali Sharma",
  "Phone": "9876543210",
  "City": "New Delhi",
  "State": "Delhi",
  "Shopping Preference": "Online",
  "Influence Factors": "Discounts, Convenience",
  "Local Shopping Challenges": "High prices",
  "Local Store Expectations": "Better service",
  "Store Relationship Importance": "Very Important",
  "Online Attraction": "Wide selection",
  "Online Replacement": "Sometimes",
  "Local vs Online Competition": "Fierce",
  "Local Store Suffering": "Yes",
  "Support Local Importance": "High",
  "Digital Platform Inclination": "Interested",
  "Expected Digital Features": "Easy returns, tracking",
  "Trust in Quality": "Moderate",
  "After Sales Experience": "Good",
  "Local Payment Preference": "UPI"
}
```

---

#### 3. Delete Buyers Survey

**API Name:** Delete Buyers Survey  
**Method:** DELETE  
**URL:** `/admin/buyers-survey/delete/<int:pk>/`  
**Description:**  
Deletes a buyer's survey response by ID.

**Path Parameter:**  
- `pk` (required): Survey's ID

**Success Response:**
```json
{
  "success": true
}
```

**Error Response:**
- `400 Bad Request` if invalid request method or survey not found.

---

#### 4. Download Buyers Surveys as CSV

**API Name:** Download Buyers Surveys as CSV  
**Method:** GET  
**URL:** `/admin/buyers-survey/download-csv/`  
**Description:**  
Downloads all buyers survey responses as a CSV file.

**CSV Columns:**  
Buyer Name, Phone, State, City, Shopping Preference, Influence Factors, Local Shopping Challenges, Local Store Expectations, Store Relationship Importance, Online Attraction, Online Replacement, Local vs Online Competition, Local Store Suffering, Support Local Importance, Digital Platform Inclination, Expected Digital Features, Trust in Quality, After Sales Experience, Local Payment Preference

**Response:**  
- Returns a downloadable CSV file (`buyers_survey.csv`).

---

**Notes:**
- Pagination: 10 surveys per page in the list endpoint.
- For all endpoints, proper authentication/authorization is assumed.
- The details and CSV export include all survey fields submitted by buyers.

---

## Database Documentation

### Database Technology

- **Database Used:** MySQL
- **Database Name:** `trjara_db`

---

## Models Overview

Below are the primary models (tables) used in the application, including all fields, data types, and relationships/choices.

---

### 1. ContactMessage

**Purpose:**  
Stores messages submitted by users via the contact form.

| Field Name | Type           | Description                    |
|------------|----------------|--------------------------------|
| id         | AutoField (PK) | Primary Key                    |
| name       | CharField(100) | Name of the sender             |
| email      | EmailField     | Email address                  |
| phone      | CharField(15)  | Phone number                   |
| message    | TextField      | Message content                |
| created_at | DateTimeField  | Timestamp when message created |

---

### 2. DeliveryPartner

**Purpose:**  
Stores information about individuals registering as delivery partners.

| Field Name    | Type           | Description                                     |
|---------------|----------------|-------------------------------------------------|
| id            | AutoField (PK) | Primary Key                                     |
| name          | CharField(100) | Name                                            |
| phone         | CharField(10)  | Phone number                                    |
| email         | EmailField     | Email address                                   |
| dob           | DateField      | Date of birth                                   |
| gender        | CharField(6)   | Gender (`male`, `female`, `other`)              |
| address       | TextField      | Address                                         |
| city          | CharField(100) | City                                            |
| pincode       | CharField(6)   | Pincode                                         |
| has_license   | CharField(3)   | Has license (`yes`, `no`)                       |
| vehicle       | CharField(20)  | Vehicle type (`two_wheeler`, `four_wheeler`, `commercial`, `no_vehicle`) |
| submitted_at  | DateTimeField  | Registration timestamp                          |

**Choices:**
- `gender`: `male`, `female`, `other`
- `has_license`: `yes`, `no`
- `vehicle`: `two_wheeler`, `four_wheeler`, `commercial`, `no_vehicle`

---

### 3. ShopOwner

**Purpose:**  
Stores shop owner registration and shop details.

| Field Name    | Type           | Description                                     |
|---------------|----------------|-------------------------------------------------|
| id            | AutoField (PK) | Primary Key                                     |
| name          | CharField(255) | Owner's name                                    |
| phone         | CharField(10)  | Phone number                                    |
| email         | EmailField     | Email address                                   |
| shop_name     | CharField(255) | Name of the shop                                |
| address       | TextField      | Shop address                                    |
| city          | CharField(100) | City                                            |
| pincode       | CharField(6)   | Pincode                                         |
| shop_category | CharField(50)  | `franchise`, `local_store`, `brand`             |
| id_proof      | CharField(3)   | Has ID proof (`yes`, `no`)                      |
| shop_docs     | CharField(3)   | Has shop documents (`yes`, `no`)                |
| created_at    | DateTimeField  | Registration timestamp                          |

**Choices:**
- `shop_category`: `franchise`, `local_store`, `brand`
- `id_proof`: `yes`, `no`
- `shop_docs`: `yes`, `no`

---

### 4. AppUser

**Purpose:**  
Stores general user registration data.

| Field Name | Type           | Description                              |
|------------|----------------|------------------------------------------|
| id         | AutoField (PK) | Primary Key                              |
| name       | CharField(255) | User's name                              |
| email      | EmailField     | Email address (unique)                   |
| phone      | CharField(10)  | Phone number (unique)                    |
| gender     | CharField(6)   | Gender (`male`, `female`, `other`)       |

**Choices:**
- `gender`: `male`, `female`, `other`

---

### 5. Sellers_Survey

**Purpose:**  
Stores detailed survey responses from sellers/shop owners.

| Field Name                        | Type                | Description / Choices / Notes                                               |
|-----------------------------------|---------------------|-----------------------------------------------------------------------------|
| id                                | AutoField (PK)      | Primary Key                                                                 |
| name                              | CharField(255)      | Seller's name                                                               |
| business_name                     | CharField(255)      | Business name                                                               |
| phone                             | CharField(20)       | Phone number (unique)                                                       |
| city                              | CharField(100)      | City                                                                        |
| state                             | CharField(100)      | State (see `STATE_CHOICES`)                                                 |
| category                          | CharField(100)      | Business category (see `BUSINESS_CATEGORIES`)                               |
| has_website                       | CharField(3)        | `Yes`/`No`                                                                  |
| sales_affected_by_ecommerce       | CharField(3)        | `Yes`/`No`                                                                  |
| affected_by_deep_discounting      | CharField(3)        | `Yes`/`No`                                                                  |
| years_in_business                 | CharField(10)       | Years in business (text/number)                                             |
| repeat_customers_percentage       | CharField(10)       | Percentage of repeat customers                                              |
| willing_to_sell_on_platform       | CharField(3)        | `Yes`/`No`                                                                  |
| willing_to_offer_promotions       | CharField(3)        | `Yes`/`No`                                                                  |
| advertises_store                  | CharField(3)        | `Yes`/`No`                                                                  |
| uses_inventory_software           | CharField(3)        | `Yes`/`No`                                                                  |
| customer_relationship_rating      | PositiveSmallInt    | 1 to 5                                                                      |
| noticed_loyalty_change            | CharField(3)        | `Yes`/`No`                                                                  |
| payment_methods                   | CharField(20)       | `Cash`, `Cash / UPI`, `Debit / Credit card`, `All`                          |
| stock_update_frequency            | CharField(10)       | `1 month`, `2 months`, ...                                                  |
| competitive_advantage             | CharField(20)       | `Low price`, `Special product`, ...                                         |
| unique_products                   | CharField(3)        | `Yes`/`No`                                                                  |
| registered_marketplaces           | CharField(3)        | `Yes`/`No`                                                                  |
| discounts_to_retain               | CharField(3)        | `Yes`/`No`                                                                  |
| store_projection                  | CharField(50)       | `Sales will remain same or increase`, `Will lead to closure of business`    |
| profit_margin                     | DecimalField        | % Profit margin, 0–100, up to 2 decimal places                              |
| has_gst                           | CharField(3)        | `Yes`/`No`                                                                  |
| charging_gst                      | CharField(3)        | `Yes`/`No`                                                                  |
| created_at                        | DateTimeField       | Timestamp of survey submission                                              |
| created_date                      | DateField           | Date of survey submission                                                   |

**Choices:**  
See the `STATE_CHOICES`, `BUSINESS_CATEGORIES`, and other choices in the model definition.

---

### 6. BuyersSurvey

**Purpose:**  
Stores detailed survey responses from buyers.

| Field Name                        | Type                | Description / Choices / Notes                                        |
|-----------------------------------|---------------------|---------------------------------------------------------------------|
| id                                | AutoField (PK)      | Primary Key                                                         |
| buyer_name                        | CharField(255)      | Name of the buyer                                                   |
| buyer_phone                       | CharField(20)       | Phone number (unique)                                               |
| buyer_city                        | CharField(100)      | City                                                                |
| buyer_state                       | CharField(100)      | State (see `STATE_CHOICES`)                                         |
| buyer_shopping_preference         | CharField(20)       | `Online`/`Offline`                                                  |
| buyer_influence_factors           | TextField           | What influences shopping choices (text)                             |
| buyer_local_shopping_challenges   | TextField           | Challenges faced in local shopping (text)                           |
| buyer_local_store_expectations    | CharField(20)       | Are local stores meeting expectations? (`Yes`, `No`, `Sometimes`)   |
| buyer_store_relationship_importance| CharField(1)        | Importance of store-owner relationship (1–5)                        |
| buyer_online_attraction           | TextField           | Most attractive feature of online platforms (text)                  |
| buyer_online_replacement          | CharField(10)       | Has online replaced local shopping? (`Yes`, `No`, `Partially`)      |
| buyer_local_vs_online_competition | CharField(3)        | Can local stores compete with online platforms? (`Yes`, `No`)       |
| buyer_local_store_suffering       | CharField(10)       | Are local stores suffering due to e-commerce? (`Yes`, `No`, `Not sure`) |
| buyer_support_local_importance    | CharField(3)        | Importance of supporting local businesses (`Yes`, `No`)             |
| buyer_digital_platform_inclination| CharField(3)        | Willingness to shop from local stores via digital platform (`Yes`, `No`) |
| buyer_expected_digital_features   | TextField           | Expected features in digital local shopping platform (text)         |
| buyer_trust_in_quality            | CharField(10)       | Trust most in quality: (`Offline stores`, `Online stores`)          |
| buyer_after_sales_experience      | CharField(20)       | Where better after-sales experience: (`Local stores`, `Online stores`) |
| buyer_local_payment_preference    | CharField(15)       | Payment method for local shopping (`Cash`, `Cash/UPI`, `Card`, `Pay later`) |
| created_at                        | DateTimeField       | Timestamp of survey submission                                      |
| created_date                      | DateField           | Date of survey submission                                           |

**Choices:**  
See the respective choices for each field in the model definition.

---

## Additional Notes

- All models use **auto-incrementing primary keys** (`id`) unless otherwise specified.
- All timestamps (`created_at`, `submitted_at`) are set automatically when a record is created.
- **Choices** fields restrict possible values and help with UI dropdowns and data validation.
- **Unique constraints** on email and phone fields help prevent duplicate user/survey registrations.
- ForeignKey relations are not present between these models, but can be added for normalization in future.
- All text and choice fields are designed to capture rich information for analytics and reporting.

---

## Deployment Guide

This document describes how to deploy and manage the **trjara.com** Django project on the production server. The project is a full-stack Django web application, backed by a MySQL database and served over Apache2 using uWSGI. Both production and test environments are maintained on the Hostinger cloud infrastructure, with domain SSL managed via Certbot.

---

### Server Configuration

- **Cloud Provider:** Hostinger
- **Operating System:** Linux Ubuntu
- **Web Server:** Apache2
- **Application Server:** uWSGI
- **Domains:**  
  - Production: [trjara.com](https://trjara.com)  
  - Test: [test.trjara.com](https://test.trjara.com)
- **SSL:** Managed by Certbot (Let's Encrypt)
- **Python Version:** 3.12.3

---

### Directory Structure

- **Main Project Directory:**  
  `/var/www/BSTP01`
- **Test Project Directory:**  
  `/var/www/Test/BSTP01`
- **Project Structure Example (Production):**
    ```
    /var/www/BSTP01/
      ├── trjara/         # Django project root
      ├── venv/           # Python virtual environment
      ├── staticfiles/    # Static files directory
      └── ...             # Other project files
    ```
- **Backend Configuration File:**  
  `/etc/apache2/sites-available/trjara.com.conf`

#### Example Apache2 VirtualHost Configuration

```apache
<VirtualHost *:80>
    ServerAdmin support@beginningsolutions.in
    ServerName trjara.com
    ServerAlias www.trjara.com

    # Redirect HTTP to HTTPS
    RewriteEngine on
    RewriteCond %{SERVER_NAME} =trjara.com [OR]
    RewriteCond %{SERVER_NAME} =www.trjara.com
    RewriteRule ^ https://%{SERVER_NAME}%{REQUEST_URI} [END,NE,R=permanent]
</VirtualHost>

<VirtualHost *:443>
    ServerAdmin support@beginningsolutions.in
    ServerName trjara.com
    ServerAlias www.trjara.com

    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/trjara.com/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/trjara.com/privkey.pem

    WSGIDaemonProcess trjara python-home=/var/www/BSTP01/venv python-path=/var/www/BSTP01/trjara
    WSGIProcessGroup trjara
    WSGIScriptAlias / /var/www/BSTP01/trjara/trjara/wsgi.py

    <Directory /var/www/BSTP01/trjara/trjara>
        <Files wsgi.py>
            Require all granted
        </Files>
    </Directory>

    Alias /static /var/www/BSTP01/trjara/staticfiles
    <Directory /var/www/BSTP01/trjara/staticfiles>
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/trjara_error.log
    CustomLog ${APACHE_LOG_DIR}/trjara_access.log combined
</VirtualHost>
```

- **Log Files Location:**
  - Error log: `/var/log/apache2/trjara_error.log`
  - Access log: `/var/log/apache2/trjara_access.log`
  - You can access logs using:
    ```
    sudo tail -f /var/log/apache2/trjara_error.log
    sudo tail -f /var/log/apache2/trjara_access.log
    ```

---

### Deployment & Update Process

Follow these steps to update or deploy the project on the server:

1. **Connect to the server via SSH.**
2. **Navigate to the main project directory:**
   ```
   cd /var/www/BSTP01
   ```
   (Or test directory: `cd /var/www/Test/BSTP01`)

3. **Pull the latest code from GitHub:**
   ```bash
   sudo git reset --hard
   sudo git pull
   ```
   - Enter the GitHub username and password/token when prompted.

4. **Activate the Python virtual environment:**
   ```bash
   source venv/bin/activate
   ```

5. **Enter the Django project folder:**
   ```bash
   cd trjara
   ```

6. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

7. **Set up or update the `.env` file for production/server environment as needed.**

8. **Apply database migrations:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

9. **Collect static files:**
   ```bash
   python manage.py collectstatic
   ```

10. **Deactivate the virtual environment:**
    ```bash
    deactivate
    ```

11. **Restart the Apache2 web server to apply changes:**
    ```bash
    sudo systemctl restart apache2
    ```

---

### Troubleshooting

#### Where to Find Logs

- **Apache Error Log:**  
  `/var/log/apache2/trjara_error.log`
- **Apache Access Log:**  
  `/var/log/apache2/trjara_access.log`

Check these logs if you encounter server errors, deployment issues, or for debugging.

**Commands to view logs in real time:**
```bash
sudo tail -f /var/log/apache2/trjara_error.log
sudo tail -f /var/log/apache2/trjara_access.log
```

#### Common Issues

- **Server not responding after deployment:**  
  - Check `trjara_error.log` for Python or uWSGI errors.
  - Ensure `.env` settings (DATABASE, SECRET_KEY, etc.) are correct.
  - Check that all migrations have run and static files are collected.
  - Make sure virtual environment is using correct Python version (3.12.3).

- **Permission Errors:**  
  - Ensure all files are owned by the correct user (e.g., `bsapp`) and have proper permissions.
  - Static files directory should be readable by Apache.

- **SSL Issues:**  
  - Make sure Certbot certificates are up-to-date.
  - Check `/etc/letsencrypt/live/trjara.com/` for certificate files.

---

**For any persistent issues, consult logs first and then check your deployment steps and configuration files.**

## 🛠️ Third Party Tools and Services

This section lists the main external tools, libraries, and services integrated with the project to provide key functionalities in notifications, frontend interactivity, and UI/UX enhancements.

---

### 1. SMTP (Email Notification Service)

- **Purpose:**  
  SMTP is used for sending automated email notifications to the admin team. Emails are triggered on events such as:
  - A new user registration.
  - Submission of the contact form by a user.
- **How it works:**  
  The Django backend is configured with SMTP credentials (typically in the `.env` file or Django settings), allowing it to send emails programmatically via the configured SMTP server.
- **Typical Email Notifications:**  
  - "A new user has been registered."
  - "A contact form has been submitted."
- **Management:**  
  SMTP server, sender email, and credentials should be kept secure and updated as needed.

---

### 2. Chart.js

- **Purpose:**  
  [Chart.js](https://www.chartjs.org/) is used for rendering interactive, visually appealing graphs and charts in the admin panel.
- **Usage:**  
  - Displaying time series data (e.g., survey submissions over the last 15 days).
  - Visualizing analytics and statistics for admin review.
- **Integration:**  
  Chart.js is loaded in admin panel templates and supplied with data from Django APIs.

---

### 3. Bootstrap

- **Purpose:**  
  [Bootstrap](https://getbootstrap.com/) is a popular front-end framework used for responsive, mobile-first UI development.
- **Usage:**  
  - Provides a consistent and modern look and feel to all pages, including forms, tables, modals, etc.
  - Ensures the admin panel and other user-facing pages are responsive and interactive across devices.

---

### 4. Bootstrap Icons & Icons8 / Iconscout

- **Purpose:**  
  - [Bootstrap Icons](https://icons.getbootstrap.com/), [Iconscout](https://iconscout.com/), and sometimes [Icons8](https://icons8.com/) are used to supplement UI with vector icons.
- **Usage:**  
  - Button icons, status indicators, navigation, and action cues throughout the admin panel and main site.
  - Enhances user experience with clear, appealing iconography.

---

### 5. jQuery

- **Purpose:**  
  [jQuery](https://jquery.com/) is a widely-used JavaScript library that simplifies DOM manipulation, event handling, AJAX calls, and general frontend scripting.
- **Usage:**  
  - Quick, cross-browser scripting for interactive elements.
  - AJAX requests in the admin panel for data updates without full page reloads.
  - Handling UI events and dynamic content.

---

**Note:**  
All third-party libraries and services are kept up-to-date and are included either via CDN or bundled with the project assets. Proper licensing and usage guidelines are followed for all external resources.

---

## 🔗 References

This section provides useful official documentation and resource links for all major languages, frameworks, libraries, and services used in this project, as well as a link to the project's GitHub repository.

---

### Project Repository

- **Project Directory on GitHub:**  
  [Beginning-co-in/BSTP01](https://github.com/Beginning-co-in/BSTP01)

---

### Official Documentation Links

#### 1. Languages & Frameworks

- **Python:**  
  [https://www.python.org/doc/](https://www.python.org/doc/)

- **Django (Web Framework):**  
  [https://docs.djangoproject.com/en/stable/](https://docs.djangoproject.com/en/stable/)

- **MySQL:**  
  [https://dev.mysql.com/doc/](https://dev.mysql.com/doc/)

#### 2. Frontend Libraries

- **Bootstrap:**  
  [https://getbootstrap.com/docs/](https://getbootstrap.com/docs/)

- **Bootstrap Icons:**  
  [https://icons.getbootstrap.com/](https://icons.getbootstrap.com/)

- **Iconscout:**  
  [https://iconscout.com/icons](https://iconscout.com/icons)

- **Icons8:**  
  [https://icons8.com/icons](https://icons8.com/icons)

- **Chart.js:**  
  [https://www.chartjs.org/docs/latest/](https://www.chartjs.org/docs/latest/)

- **jQuery:**  
  [https://api.jquery.com/](https://api.jquery.com/)

#### 3. Web & Server

- **Apache HTTP Server:**  
  [https://httpd.apache.org/docs/](https://httpd.apache.org/docs/)

- **uWSGI:**  
  [https://uwsgi-docs.readthedocs.io/en/latest/](https://uwsgi-docs.readthedocs.io/en/latest/)

- **Certbot (Let's Encrypt SSL):**  
  [https://certbot.eff.org/docs/](https://certbot.eff.org/docs/)

- **Ubuntu Linux:**  
  [https://help.ubuntu.com/](https://help.ubuntu.com/)

#### 4. Miscellaneous

- **SMTP (Email Protocol):**  
  [https://tools.ietf.org/html/rfc5321](https://tools.ietf.org/html/rfc5321)

---

**For further details about any technology or integration, refer to the above official documentation.**
---

## 📝🔚 Conclusion

This documentation serves as a comprehensive guide for understanding, deploying, and maintaining the **trjara.com** project. It covers every critical aspect of the system, including detailed API usage, database schema, deployment processes, server configurations, and the integration of essential third-party tools and services. With clear explanations, real code and configuration examples, and direct references to official documentation, this guide is intended to empower both new and experienced developers to manage and extend the project effectively.

By following the deployment and troubleshooting sections, server administrators can confidently update and maintain the platform in a secure and robust manner. The documentation of models and API endpoints ensures backend and frontend developers can collaborate seamlessly, while the third-party tools section highlights the modern technologies that enhance the project’s functionality and user experience.

Overall, this documentation acts as a single source of truth for the project, supporting ongoing development, smooth onboarding, and reliable operations. For any further questions or advanced customization, developers and administrators are encouraged to refer to the official documentation links and the project's GitHub repository provided in the references section.


## 📞 Contact Information

If you have any questions, suggestions, or require support, feel free to get in touch with us.

**Managed by:** Beginning Solutions

- **Website:** [https://beginningsolutions.in/](https://beginningsolutions.in/)
- **Email:** contact@beginningsolutions.in
- **Phone:** +91 8484837340

We're here to help you with all your project needs!

## 🙏 Thank You

Thank you for taking the time to review the complete documentation for this project. Beginning Solutions is always here to help you at any stage—whether you're developing, deploying, or maintaining your application. We appreciate your trust and look forward to supporting your success!
