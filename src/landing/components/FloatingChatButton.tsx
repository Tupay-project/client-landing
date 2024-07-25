import React, { useState } from 'react';

const FloatingChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      setMessages([...messages, inputMessage]);
      setInputMessage('');
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
      <button
  onClick={toggleChat}
  className="btn btn-success btn-lg rounded-circle position-relative"
  style={{ width: '60px', height: '60px', padding: '0' }}
>
  <i className="bi bi-chat-dots-fill position-absolute top-50 start-50 translate-middle" style={{ fontSize: '24px',padding:'0' }}></i>
</button>

      {isOpen && (
        <div className="card" style={{ position: 'absolute', bottom: '70px', right: '0', width: '300px', maxHeight: '400px', display: 'flex', flexDirection: 'column' }}>
          <div className="card-header">
            Chatbot
            <button onClick={toggleChat} className="btn-close float-center"></button>
          </div>
          <div className="card-body overflow-auto" style={{ flex: '1 1 auto' }}>
            <p>Hola, ¿en qué puedo ayudarte?</p>
            <ul className="list-unstyled">
              <li>
                <button className="btn btn-link">Opción 1</button>
              </li>
              <li>
                <button className="btn btn-link">Opción 2</button>
              </li>
              <li>
                <button className="btn btn-link">Opción 3</button>
              </li>
            </ul>
            <div>
              {messages.map((msg, index) => (
                <div key={index} className="alert alert-secondary">
                  {msg}
                </div>
              ))}
            </div>
          </div>
          <div className="card-footer">
            <form onSubmit={handleSendMessage}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Escribe un mensaje..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                />
                <button type="submit" className="btn btn-success">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingChatButton;
