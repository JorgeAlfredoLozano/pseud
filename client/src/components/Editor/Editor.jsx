import style from './Editor.module.css'
import React, { useState } from 'react';
import { keywords } from './keywords';

const Editor = () => {
    const [code, setCode] = useState('');
    let lines = [];
    let linesOk = [];

    const handleCodeChange = (event) => {
        lines = event.target.value.split('\n');
        linesOk = lines.map((line) => {
          let updatedLine = line;
          keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'gi'); // \b para limitar a palabras completas y g para búsqueda global
            updatedLine = updatedLine.replace(regex, keyword.toUpperCase());
          });
          return updatedLine;
        });
        setCode(linesOk.join('\n'));
      };
    const lineCount = code.split('\n').length;
    const lineNumbers = Array.from({ length: lineCount }, (_, index) => index + 1).join('\n');

    return (
        <div className={style.container}>
            <div className={style.content}>
                {/* Nro de Líneas del editor */}
                <textarea 
                    className={style.nroLinea} 
                    name="" 
                    id="" 
                    cols="4" 
                    rows="10"
                    value={lineNumbers}
                />
                {/* Editor de Código  */}
                <textarea 
                    className={style.editor} 
                    name="" 
                    id="" 
                    cols="40" 
                    rows="10"
                    value={code}
                    onChange={handleCodeChange}
                />
            </div>
        </div>
    )
}

export default Editor;
