# Rand'images

Rand'images is a simple React application that loads random open-source images using lazy loading as you scroll. You can download the images using the FileSaver library.

## Features

- Infinite Scroll: Images are dynamically loaded as the user scrolls down the page.
- `Custom Hook:` A custom useScrollPosition hook is used to detect when the user reaches the bottom of the page.
- Image Download: The `file-saver` library is integrated to allow users to download images directly.
- Image Metadata: Each image card displays the author and original image size.

## Getting Started

To run the application locally, follow these steps:

1. **Clone the Repository**

Clone to the project to your local machine:

```bash
git clone https://github.com/your-repository/react-rand-images.git
```

2. **Install Dependencies**

Navigate to the project directory and install the necessary npm packages:

```bash
cd react-rand-images
```

```bash
npm install
```

5. **Start the Application**

```bash
npm run dev
```

## Technologies

- `React` (with hooks)
- `Vite` for development and build
- `FileSaver` for image downloading
