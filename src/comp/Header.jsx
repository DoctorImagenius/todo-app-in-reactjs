import React, { useState } from 'react';
import '../App.css';
import Modal from './Modal.jsx';

function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: <></> });
  const [menuOpen, setMenuOpen] = useState(false);

  const openModal = (type) => {
    let title = '';
    let content = <></>;

    switch (type) {
      case 'home':
        title = '🏠 Home';
        content = <p>You are already on the home page.</p>;
        break;
      case 'about':
        title = '🧘‍♂️ About';
        content = <p>This ToDo app was created by a passionate developer to manage daily tasks with elegance and futuristic design.</p>;
        break;
      case 'contact':
        title = '📞 Contact';
        content = (
          <div className="contact-links">
            <p><strong>📧 Email:</strong> <a href="mailto:imagenius1001@gmail.com">imagenius1001@gmail.com</a></p>
            <p><strong>🌐 Portfolio:</strong> <a href="https://imagenius1001.netlify.app/">imagenius1001.netlify.app</a></p>
            <p><strong>🔗 LinkedIn:</strong> <a href="https://www.linkedin.com/in/haroon-babar-imagenius1001">linkedin.com/in/haroon-babar-imagenius1001</a></p>
            <p><strong>📘 Facebook:</strong> <a href="https://www.facebook.com/haroon.malik">facebook.com/haroon.malik</a></p>
            <p><strong>📸 Instagram:</strong> <a href="https://www.instagram.com/">instagram.com</a></p>
            <p><strong>🐙 GitHub:</strong> <a href="https://github.com/DoctorImagenius">github.com/DoctorImagenius</a></p>
          </div>
        );
        break;
      default:
        return;
    }

    setModalContent({ title, content });
    setModalOpen(true);
    setMenuOpen(false); // Close mobile menu
  };

  return (
    <>
      <header className="header">
        <div className="logo">📌 ToDo</div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <span className="nav-link" onClick={() => openModal('home')}>Home</span>
          <span className="nav-link" onClick={() => openModal('about')}>About</span>
          <span className="nav-link" onClick={() => openModal('contact')}>Contact</span>
        </nav>
      </header>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalContent.title}
        content={modalContent.content}
      />
    </>
  );
}

export default Header;
