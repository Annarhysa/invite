# 🎉 Staycation Invitation Website

A beautiful and interactive staycation invitation website built with Node.js, featuring the iconic Ferrari color scheme and fun RSVP functionality.

## 🎨 Ferrari Color Scheme

The website uses the authentic Ferrari color palette:
- **Green**: `#009A4E`
- **White**: `#FFFFFF` 
- **Red**: `#ED1C24`
- **Yellow**: `#FFF200`
- **Black**: `#000000`

## ✨ Features

- 🎊 Beautiful invitation design with Ferrari colors
- 👑 Host and guest information display
- 📍 Location details with Google Maps integration
- 📝 Interactive RSVP form with email notifications
- 🎭 Fun cancel button (spoiler: there's no backing out!)
- 📱 Fully responsive design
- 🎨 Smooth animations and hover effects
- 📧 Email integration for RSVP responses

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Gmail account for email functionality

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd invite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure email settings**
   
   For Gmail, you'll need to:
   - Enable 2-factor authentication
   - Generate an App Password
   - Set the environment variable:
   
   ```bash
   # Windows PowerShell
   $env:EMAIL_PASSWORD="your-app-password"
   
   # Or create a .env file
   EMAIL_PASSWORD=your-app-password
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📧 Email Configuration

The website sends RSVP notifications to `annarhys13@gmail.com`. To configure:

1. **Gmail Setup**:
   - Go to Google Account settings
   - Enable 2-factor authentication
   - Generate an App Password
   - Use the App Password in your environment variables

2. **Environment Variables**:
   ```bash
   EMAIL_PASSWORD=your-gmail-app-password
   ```

## 🎭 Fun Features

### The Cancel Button
- **Spoiler Alert**: There's no actual cancellation possible! 😄
- The button plays fun animations and shows humorous messages
- It's designed to be entertaining while making it clear there's no backing out

### Interactive Elements
- Click on Ferrari color bars to see color information
- Hover effects on all interactive elements
- Smooth animations throughout the experience
- Random subtle animations for added fun

## 🏗️ Project Structure

```
invite/
├── public/
│   ├── index.html      # Main HTML file
│   ├── styles.css      # Ferrari-themed CSS
│   └── script.js       # Interactive JavaScript
├── server.js           # Node.js server
├── package.json        # Dependencies
└── README.md          # This file
```

## 🎨 Customization

### Colors
All Ferrari colors are defined as CSS variables in `public/styles.css`:
```css
:root {
    --ferrari-green: #009A4E;
    --ferrari-white: #FFFFFF;
    --ferrari-red: #ED1C24;
    --ferrari-yellow: #FFF200;
    --ferrari-black: #000000;
}
```

### Content
- Update host/guest information in `public/index.html`
- Modify location details and Google Maps link
- Customize RSVP form fields as needed

## 🚀 Deployment

### Local Development
```bash
npm run dev  # Uses nodemon for auto-restart
```

### Production
```bash
npm start    # Standard Node.js start
```

### Environment Variables
Set these for production:
- `PORT`: Server port (default: 3000)
- `EMAIL_PASSWORD`: Gmail App Password

## 🐛 Troubleshooting

### Email Issues
- Ensure 2FA is enabled on Gmail
- Use App Password, not regular password
- Check firewall/antivirus settings

### Port Issues
- Change port in `server.js` or set `PORT` environment variable
- Ensure port is not already in use

## 📱 Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## 🎊 Invitation Details

- **Host**: Annarhysa Albert
- **Guest**: Prithvi Raja Shah
- **Location**: Green Oasis, 510, West Avenue, Kalayani Nagar, Pune - 41006
- **Map**: [Google Maps Directions](https://maps.app.goo.gl/e6Udc29WYpCsVPwF7)

## 📄 License

MIT License - Feel free to use and modify!

## 🎭 Remember

> "There's no backing out now! You're coming whether you like it or not!" 😄

---

**Created with ❤️ for an amazing staycation experience!**
