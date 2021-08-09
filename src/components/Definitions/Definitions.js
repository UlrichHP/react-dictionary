import React from 'react'
import './Definitions.css'

const Definitions = ({word, datas, category, theme}) => {
  let i = 0

  return (
    <div className="meanings">
      {/* audio---------------------------- */}
      {datas[0] && word && category === 'en' && (
        <audio
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          src={datas[0].phonetics[0] && datas[0].phonetics[0].audio}
          controls
        >
          Your browser does not support the audio element.
        </audio>
      )}
      {/* audio---------------------------- */}

      {word === '' ? (
        <span className="subTitle">Commencez par écrire un mot</span>
      ) : (
        datas.map((data) =>
          data.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                key={i++}
                style={{
                  backgroundColor: theme ? '#3b5360' : '#fff',
                  color: theme ? '#fff' : '#000',
                }}
              >
                <strong>{def.definition}</strong>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <strong>Example :</strong> {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <strong>Synonyms :</strong> {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  )
}

export default Definitions
