
import React from 'react';
import loadable from '@loadable/component';
import ResoursePage from './container/Resourse/ResoursePage.js';
import ResourseDetail from './container/ResourseDetails/ResourseDetail';
import Layout from './hoc/Layout/Layout.js';
import Root from './Root.js';
// const ResoursePage = loadable(() => import('./container/Resourse/ResoursePage.js'),{ssr: true});
// const ResourseDetail = loadable(() => import('./container/ResourseDetails/ResourseDetail'),{ssr: true});

export default [
    {
        component:Root,
    route:[{
        path:'/',
        component:ResoursePage,
        exact:true
    },
    {
        path:'/:id',
        component:ResourseDetail,

    }]
}
]

