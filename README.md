# Gemini AI Chat Interface

A modern React-based chat interface that mimics Google's Gemini AI, built with React 19 and Vite.

## Features

- 🤖 **AI Chat Interface**: Powered by Google's Gemini 2.0 Flash model
- 💬 **Real-time Chat**: Interactive chat with AI responses
- 🎨 **Modern UI**: Clean, responsive design similar to Google Gemini
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🔒 **Secure**: API keys stored in environment variables
- ⚡ **Fast**: Built with Vite for optimal performance

## Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: CSS3 with modern features
- **AI Integration**: Google Generative AI SDK
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Google AI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/gemini-ai-chat.git
   cd gemini-ai-chat
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Getting a Google AI API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated key
5. Add it to your `.env` file

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── Main/           # Main chat interface
│   └── Sidebar/        # Navigation sidebar
├── assets/            # Images and icons
├── config/            # API configuration
├── context/           # React context
└── App.jsx            # Main component
```

## Deployment

This project is configured for GitHub Pages deployment. The build process creates a static site that can be hosted on GitHub Pages.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Google AI for the Gemini API
- React team for the amazing framework
- Vite team for the fast build tool