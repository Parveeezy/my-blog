import React from 'react';
import {
    PostAddButton,
    PostElement, PostElementButton, PostElementContent, PostElementDescription, PostElementTitle,
    PostsBlockWrapper, PostsTitleAddBlock,
    PostTitle,
    PostWrapper
} from "./component";
import NewPostForm from "./NewPostForm/NewPostForm";


const Post = () => {


    return (
        <>
            <PostsTitleAddBlock>
                <PostTitle>
                    Hello world
                </PostTitle>
                <PostAddButton>
                    +
                </PostAddButton>
            </PostsTitleAddBlock>


            <NewPostForm/>


            <PostWrapper>
                <PostsBlockWrapper>
                    <PostElement>
                        <PostElementTitle>
                            Element title
                        </PostElementTitle>
                        <PostElementContent>
                            <PostElementDescription>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aut expedita fuga illo impedit laboriosam libero magnam minima
                                nam officia porro praesentium provident quas quisquam quos,
                                sequi ut voluptate? Animi, vitae!...
                            </PostElementDescription>
                            <PostElementButton>
                                More...
                            </PostElementButton>
                        </PostElementContent>
                    </PostElement>
                </PostsBlockWrapper>
            </PostWrapper>
        </>
    );
};

export default Post;