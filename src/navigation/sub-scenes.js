/**
 * Tabs Scenes
 */
import React from 'react';
import { Scene } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';
import { AppStyles, AppSizes, AppColors } from '@theme/';

// Components
import { BackButton } from '@components/ui'
import { ChatNavBar } from '@containers/main/home/conversations/conversation/Render'


// Containers
import UserProfileContainer from '@containers/main/user-profile/UserProfileContainer';
import CommentsContainer from '@containers/main/home/stream/comments/CommentsContainer';
import ConversationContainer from '@containers/main/home/conversations/conversation/ConversationContainer';


/* Routes ==================================================================== */
const scenes = ([

        <Scene
            hideNavBar
            key={'userProfileView'}
            component={UserProfileContainer}
            title={'Profile'}
            analyticsDesc={(props) => {`UserProfile: View ${props.userID}`}}
        />,


        <Scene
            {...AppConfig.navbarProps}
            renderBackButton={() => { return (<BackButton />)}}
            key={'commentsView'}
            component={CommentsContainer}
            title={'Comments'}
            analyticsDesc={(props) => {`CommentsView: View ${props.postID}`}}
        />,

        <Scene
            passProps
            { ...AppConfig.navbarProps }
            renderBackButton={() => { return (<BackButton />)}}
            key={'conversationView'}
            component={ ConversationContainer }
            navBar={ ChatNavBar }
            analyticsDesc={'ConversationView: Chat View Someone'}
        />

]);

export default scenes;
