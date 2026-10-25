# Programming Lab Programs Viewer

A clean, responsive, single-page React and Vite website designed to view Java Programming Laboratory practical programs with ease.

## ✨ Features

- **Title**: Clean header displaying "Programming Lab Programs".
- **Complete Program Coverage**: Contains Programs 1 through 12 extracted directly from the laboratory manual:
  - **Program 1**: Package Employee
  - **Program 2**: Polymorphism, Inheritance and Inner Classes
  - **Program 3**: Custom Shapes (Swing Graphics & Menus)
  - **Program 4**: Mouse Event (MouseAdapter)
  - **Program 5**: Student Info (File I/O with FileWriter & FileReader)
  - **Program 6**: Tree Viewer (JTree & DefaultMutableTreeNode)
  - **Program 7**: Badwords Filter (HashSet & BufferedReader)
  - **Program 8**: Temperature Converter (Celsius to Fahrenheit GUI)
  - **Program 9**: Student Details Swing (Form with Validation)
  - **Program 10**: Image Viewer (JavaBean Component)
  - **Program 11**: 2D Shapes (Line, Rectangle, Oval)
  - **Program 12**: 2D Transformations (Translation, Scaling, Rotation)
- **Detailed Program Cards**:
  - Program Number and Title
  - Aim
  - Step-by-Step Algorithm
  - Program Source Code in a clean monospaced font with a 1-click **Copy Code** button
  - Output / Execution results displayed in terminal style
- **Flexible Navigation**:
  - Direct dropdown selector
  - Quick-switch program tabs (Programs 1 to 12)
  - **Previous** and **Next** buttons
- **Download Option**:
  - "Download All (.doc)" button to export all programs formatted for Microsoft Word.
- **Pure Client-Side**: No backend, no login, no database required.

---

## 🚀 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` (or the port shown in your terminal) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📦 How to Upload to GitHub

1. Create a new repository on [GitHub](https://github.com/new) (e.g., `lab-programs-viewer`).
2. Run the following commands in this project folder:

```bash
# Add your GitHub remote repository URL
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<REPO_NAME>.git

# Push to the main branch
git push -u origin main
```

---

## 🌐 How to Deploy on Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com/) and sign in with your GitHub account.
2. Click **"Add New..."** -> **"Project"**.
3. Select your GitHub repository (`lab-programs-viewer`).
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your website will be live in seconds with an HTTPS URL.

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy directly from terminal
vercel
```
Follow the interactive prompts (defaults work out of the box).
