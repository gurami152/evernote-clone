import styles from '../../styles/evernote.module.scss'
import { app, database } from '../../firebase/config';
import { collection, addDoc, getDocs } from 'firebase/firestore';


import { useState, useEffect } from 'react';


export default function note({ getSingleNote }) {
    const [isInputVisible, setInputVisible] = useState(false);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteDesc, setNoteDesc] = useState('')
    const [notesArray, setNotesArray] = useState([]);

    useEffect(() => {
        getNotes();
    }, [])


    const dbInstance = collection(database, 'notes');

    const inputToggle = () => {
        setInputVisible(!isInputVisible)
    }

    const saveNote = () => {
        addDoc(dbInstance, {
            noteTitle: noteTitle,
            noteDesc: noteDesc
        }).then(() => {
            setNoteTitle('')
            setNoteDesc('')
            getNotes();
        })
    }

    const getNotes = () => {
        getDocs(dbInstance)
            .then((data) => {
                setNotesArray(data.docs.map((item) => {
                    return { ...item.data(), id: item.id }
                }));
            })
    }

    return (
        <>
            <div className={styles.btnContainer}>
                <button
                    onClick={inputToggle}
                    className={styles.button}>
                    Add a New Note
                </button>
            </div>

            {isInputVisible ? (
                <div className={styles.inputContainer}>
                    <input
                        className={styles.input}
                        placeholder='Enter the Title..'
                        onChange={(e) => setNoteTitle(e.target.value)}
                    />
                    <textarea
                        className={styles.textarea}
                        placeholder='Enter the description..'
                        onChange={(e) => setNoteDesc(e.target.value)}
                    >

                    </textarea>
                    <button
                        onClick={saveNote}
                        className={styles.saveBtn}>
                        Save Note
                    </button>
                </div>

            ) : (
                <></>
            )}
            {notesArray.map((note) => {
                return (
                    <div className={styles.notesInner}
                        onClick={() => getSingleNote(note.id)}
                    >
                        <h4 class="text-lg font-bold">{note.noteTitle}</h4>
                    </div>
                )
            })}

        </>
    )
}


