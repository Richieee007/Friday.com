import UpcomingEvents from "./home/upcoming-events";
import DealsChart from "./home/deals-chart";
import AccordionHeaderSkeleton from '../components/skeleton/accordion-header'
import KanbanColumnSkeleton from '../components/skeleton/kanban'
import LatestActivitiesSkeleton from '../components/skeleton/latest-activities'
import UpcomingEventsSkeleton from '../components/skeleton/upcoming-events'
import ProjectCardSkeleton from '../components/skeleton/project-card'
import DashboardTotalCountCard from '../components/home/total-count-card'
import DashboardLatestActivities from '../components/home/latest-activites'


export {
    UpcomingEvents, 
    DealsChart, 
    
    UpcomingEventsSkeleton, 
    AccordionHeaderSkeleton, 
    KanbanColumnSkeleton, 
    LatestActivitiesSkeleton,
    ProjectCardSkeleton,
    DashboardTotalCountCard,
    DashboardLatestActivities
};


export * from './tags/user-tag';
export * from './text';
export * from './tasks/form/description';
export * from './tasks/form/due-date';
export * from './tasks/form/stage';
export * from './tasks/form/title';
export * from './tasks/form/users';
export * from './tasks/form/header';
export * from '../components/accordion';