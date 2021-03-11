import React from 'react';
import AccordionWindow from "./AccordionWindow";

export default function Rendering(props) {

    const {todos,doneButtonClick,deleteButtonClick} = props;

    return (
        <div>
            {todos.map(el =>
                <p key={el.id}>
                    {/*<OneTask el={el} doneButtonClick={doneButtonClick}/>*/}
                        <AccordionWindow el={el} doneButtonClick={doneButtonClick} deleteButtonClick={deleteButtonClick}/>
                </p>
            )}
        </div>
    );
}