import { useState } from 'react';
import { programsData } from './programsData';
import './App.css';

function downloadWordDocument(programs) {
  let content = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' 
          xmlns:w='urn:schemas-microsoft-com:office:word' 
          xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset="utf-8">
      <title>Programming Lab Programs</title>
      <style>
        body { font-family: 'Segoe UI', Calibri, Arial, sans-serif; font-size: 11pt; line-height: 1.5; color: #1f2937; }
        h1 { color: #1e3a8a; text-align: center; font-size: 20pt; margin-bottom: 24px; }
        .program-card { margin-bottom: 30px; }
        .page-break { page-break-after: always; }
        h2 { color: #1e40af; font-size: 14pt; border-bottom: 2px solid #3b82f6; padding-bottom: 4px; margin-top: 15px; }
        h3 { color: #374151; font-size: 12pt; margin-top: 12px; margin-bottom: 4px; }
        p { margin: 4px 0 10px 0; }
        ol { margin-top: 4px; margin-bottom: 10px; padding-left: 20px; }
        li { margin-bottom: 4px; }
        pre { background: #f3f4f6; border: 1px solid #d1d5db; padding: 10px; font-family: Consolas, 'Courier New', monospace; font-size: 9.5pt; white-space: pre-wrap; word-break: break-all; }
        .output-box { background: #1f2937; color: #f9fafb; border: 1px solid #111827; padding: 10px; font-family: Consolas, 'Courier New', monospace; font-size: 9.5pt; white-space: pre-wrap; }
      </style>
    </head>
    <body>
      <h1>Programming Lab Programs</h1>
  `;

  programs.forEach((prog, index) => {
    content += `
      <div class="program-card ${index < programs.length - 1 ? 'page-break' : ''}">
        <h2>${prog.number}: ${prog.title}</h2>
        <h3>Aim:</h3>
        <p>${prog.aim}</p>
        
        <h3>Algorithm:</h3>
        <ol>
          ${prog.algorithm.map((step) => `<li>${step}</li>`).join('')}
        </ol>

        <h3>Program Code:</h3>
        <pre><code>${prog.code
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')}</code></pre>

        ${
          prog.output
            ? `
          <h3>Output:</h3>
          <div class="output-box">${prog.output
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')}</div>
        `
            : ''
        }
      </div>
    `;
  });

  content += `</body></html>`;

  const blob = new Blob(['\ufeff', content], { type: 'application/msword' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Programming_Lab_Programs.doc';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentProgram = programsData[currentIndex];

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCopied(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentIndex < programsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCopied(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectChange = (e) => {
    setCurrentIndex(Number(e.target.value));
    setCopied(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyCode = () => {
    if (currentProgram && currentProgram.code) {
      navigator.clipboard.writeText(currentProgram.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="app-container">
      {/* Top Header */}
      <header className="app-header">
        <div className="header-content">
          <div>
            <h1 className="app-title">Programming Lab Programs</h1>
            <p className="app-subtitle">Java Programming Laboratory Manual & Reference</p>
          </div>
          <button
            id="download-doc-btn"
            className="btn btn-download"
            onClick={() => downloadWordDocument(programsData)}
            title="Download all programs as a Word document (.doc)"
          >
            <span className="btn-icon">📄</span>
            <span>Download All (.doc)</span>
          </button>
        </div>
      </header>

      {/* Navigation Controls Bar */}
      <nav className="controls-bar" aria-label="Program navigation controls">
        <div className="controls-left">
          <label htmlFor="program-select" className="control-label">
            Select Program:
          </label>
          <select
            id="program-select"
            className="program-select"
            value={currentIndex}
            onChange={handleSelectChange}
          >
            {programsData.map((prog, index) => (
              <option key={prog.id} value={index}>
                {prog.number}: {prog.title}
              </option>
            ))}
          </select>
        </div>

        <div className="controls-right">
          <button
            id="prev-btn"
            className="btn btn-nav"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            &larr; Previous
          </button>
          <span className="nav-counter">
            {currentIndex + 1} of {programsData.length}
          </span>
          <button
            id="next-btn"
            className="btn btn-nav"
            onClick={handleNext}
            disabled={currentIndex === programsData.length - 1}
          >
            Next &rarr;
          </button>
        </div>
      </nav>

      {/* Program Quick Navigation Tabs / List */}
      <div className="program-tabs-container" aria-label="Program list selector">
        <div className="program-tabs">
          {programsData.map((prog, index) => (
            <button
              key={prog.id}
              id={`tab-program-${prog.id}`}
              className={`tab-btn ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setCurrentIndex(index);
                setCopied(false);
              }}
            >
              {prog.number}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="main-content">
        <article className="program-card">
          {/* Program Header */}
          <div className="card-header">
            <span className="badge">{currentProgram.number}</span>
            <h2 className="program-heading">{currentProgram.title}</h2>
          </div>

          {/* Aim Section */}
          <section className="section-block">
            <h3 className="section-title">Aim</h3>
            <p className="section-text">{currentProgram.aim}</p>
          </section>

          {/* Algorithm Section */}
          <section className="section-block">
            <h3 className="section-title">Algorithm</h3>
            <ol className="algorithm-list">
              {currentProgram.algorithm.map((step, idx) => (
                <li key={idx} className="algorithm-step">
                  {step}
                </li>
              ))}
            </ol>
          </section>

          {/* Code Section */}
          <section className="section-block">
            <div className="code-header">
              <h3 className="section-title">Program Code</h3>
              <button
                id="copy-code-btn"
                className={`btn btn-copy ${copied ? 'copied' : ''}`}
                onClick={handleCopyCode}
              >
                {copied ? '✓ Copied' : '📋 Copy Code'}
              </button>
            </div>
            <div className="code-container">
              <pre className="code-block">
                <code>{currentProgram.code}</code>
              </pre>
            </div>
          </section>

          {/* Output Section */}
          {currentProgram.output && (
            <section className="section-block">
              <h3 className="section-title">Output</h3>
              <div className="output-container">
                <div className="output-terminal-header">
                  <span className="terminal-dot dot-red"></span>
                  <span className="terminal-dot dot-yellow"></span>
                  <span className="terminal-dot dot-green"></span>
                  <span className="terminal-title">Console / Execution Output</span>
                </div>
                <pre className="output-block">
                  <code>{currentProgram.output}</code>
                </pre>
              </div>
            </section>
          )}

          {/* Footer Navigation Buttons */}
          <div className="card-footer-nav">
            <button
              className="btn btn-nav"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              &larr; Previous Program
            </button>
            <button
              className="btn btn-nav"
              onClick={handleNext}
              disabled={currentIndex === programsData.length - 1}
            >
              Next Program &rarr;
            </button>
          </div>
        </article>
      </main>

      {/* Simple Footer */}
      <footer className="app-footer">
        <p>Programming Lab Programs Viewer &bull; Built with React &amp; Vite</p>
      </footer>
    </div>
  );
}
