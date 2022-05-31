import React, { useState } from 'react';

export function ListItem(props: { name: string }) {
    const [change, change_set] = useState(false);
    const [tmp, tmp_set] = useState(props.name);
    const [text, text_set] = useState(props.name);
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            text_set(tmp);
            change_set(false);
        }
        if (e.key === `Escape`) {
            tmp_set(text);
            change_set(false);
        }
    };
    return change ? (
        <input
            value={tmp}
            onChange={(e) => tmp_set(e.target.value)}
            onKeyDown={onKeyDown}
        />
    ) : (
        <div onClick={() => change_set(true)}>{text}</div>
    );
}
