# 3D Website Project

A 3D website project you can see at https://website-world.vercel.app/

## Project Structure

```
3d-website-project/
├── index.html              # Main HTML file
├── package.json            # Project configuration
├── README.md              # This file
├── src/
│   ├── main.js            # Main JavaScript entry point
│   ├── styles/
│   │   └── main.css       # Main stylesheet
│   ├── components/        # React/Vue components (future)
│   ├── assets/           # Images, models, textures
│   └── utils/            # Utility functions
└── public/               # Static assets
```

## Getting Started

### Prerequisites
- Python 3 (for local development server)
- Modern web browser with WebGL support

### Running the Project

1. Navigate to the project directory:
   ```bash
   cd 3d-website-project
   ```

2. Start the development server:
   ```bash
   python3 -m http.server 3000
   ```
   or
   ```bash
   npm start
   ```

3. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Current Features

- ✅ Black canvas ready for 3D development
- ✅ Responsive design
- ✅ Event handling for mouse interactions
- ✅ Loading indicator
- ✅ Basic project structure

## Planned Features

- [ ] Three.js integration for 3D rendering
- [ ] City-like 3D environment
- [ ] Interactive camera controls
- [ ] 3D models and textures
- [ ] Performance optimization
- [ ] Mobile support

## Development Notes

- The black background provides a clean canvas for 3D development
- Event listeners are already set up for future 3D interactions

## Technologies to Consider

- **Three.js** - 3D graphics library
- **WebGL** - Low-level 3D graphics API
- **GLTF/GLB** - 3D model formats
- **Webpack/Vite** - Build tools (future)
- **React/Vue** - UI framework (optional)

## Contributing

This is a personal project, but feel free to use this structure as a starting point for your own 3D web projects. 
