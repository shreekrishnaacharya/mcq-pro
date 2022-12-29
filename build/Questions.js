import React, { useState, createRef } from 'react';

import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

export default function TodoList() {
    const [items, setItems] = useState([]);

    return (
        <div style={{ marginTop: '2rem' }}>
            <ul style={{ marginBottom: '1rem' }}>
                <TransitionGroup className="todo-list">
                    {items.map(({ id, qsn, qsn2, answer }) => (
                        <CSSTransition
                            key={id}
                            timeout={500}
                            classNames="item"
                        >
                            <li>
                                <button
                                    className="remove-btn"
                                    variant="danger"
                                    size="sm"
                                    onClick={() =>
                                        setItems((items) =>
                                            items.filter((item) => item.id !== id)
                                        )
                                    }
                                >
                                    &times;
                                </button>
                                {'Qsn ' + (id + 1) + ' :' + text} -----@
                                {answer.join(' @')}
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ul>
            <button
                onClick={() => {
                    const text = prompt('Enter some text');
                    if (text) {
                        setItems((items) => {
                            const len = items.length - 1
                            console.log(len)
                            return [
                                ...items,
                                {
                                    text,
                                    answer: len > -1 ? items[len].answer : [],
                                },
                            ]
                        });
                    }
                }}
            >
                Add Question
            </button>
            <button
                onClick={() => {
                    const text = prompt('Enter answer text');
                    if (text) {
                        setItems((items) => {
                            const len = items.length - 1
                            let ans = text
                            ans = ans.replace('(i)', ',');
                            ans = ans.replace('(ii)', ',');
                            ans = ans.replace('(iii)', ',');
                            ans = ans.replace('(iv)', ',');
                            let arr = ans.split(',');
                            arr = arr.map(e => {
                                e = e.trim()
                                e = e.replace(/(\r\n|\n|\r)/g, "")
                                e = e.replace(/\s{2,}/g, ' ')
                                e = e.replace(/\t/g, ' ')
                                return e
                            }).filter(e => e.length > 0)
                            const item = [
                                ...items
                            ]
                            item[len].answer = arr
                            console.log(arr)
                            return item;
                        });
                    }
                }}
            >
                Add answer
            </button>
            <button
                onClick={() => {
                    const item = [...items]
                    console.log(JSON.stringify(item))
                    console.log(item)
                }}
            >done</button>
        </div >
    );
}
