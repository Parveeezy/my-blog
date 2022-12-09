import React from 'react';
import {
    NewPostAddButton, NewPostDescription,
    NewPostDescriptionWrapper,
    NewPostInput,
    NewPostWrapper
} from "./component";



const NewPostForm = () => {
    return (
        <NewPostWrapper>
            <NewPostInput placeholder='Enter new post title' style={{color: '#d2b4b4'}}/>
            <NewPostDescriptionWrapper>
                <NewPostDescription placeholder='Enter new post description' multiline rows={8}/>
                <NewPostAddButton>
                    Add post
                </NewPostAddButton>
            </NewPostDescriptionWrapper>
        </NewPostWrapper>
    );
};

export default NewPostForm;