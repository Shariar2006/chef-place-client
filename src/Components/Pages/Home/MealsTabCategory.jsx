/* eslint-disable react/no-unescaped-entities */
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import '../../../index.css'
import MenuCard from '../../../Carts/MenuCard/MenuCard';
import AllCard from '../../../Carts/AllFoodCard/AllCard';

const MealsTabCategory = () => {
    // const categories = ['dessert', 'pizza', 'soup', 'salad', 'drinks']

    // const initialIndex = categories.indexOf(category)


    const [menu] = useMenu()

    const breakfast = menu.filter(item => item.category === 'breakfast')
    const lunch = menu.filter(item => item.category === 'lunch')
    const dinner = menu.filter(item => item.category === 'dinner')

    return (
        <div className='min-h-screen'>
            <SectionTitle subTitle='Meals by category' headerTitle='Our Meals Category'></SectionTitle>


            <Tabs  className='text-center'
            // defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}
            >
                <TabList>
                    <Tab>All</Tab>
                    <Tab>Breakfast</Tab>
                    <Tab>Lunch</Tab>
                    <Tab>Dinner</Tab>
                </TabList>


                <TabPanel>
                    <AllCard></AllCard>
                </TabPanel>
                <TabPanel>
                    <MenuCard items={breakfast}></MenuCard>
                </TabPanel>
                <TabPanel>
                    <MenuCard items={lunch}></MenuCard>
                </TabPanel>
                <TabPanel>
                    <MenuCard items={dinner}></MenuCard>
                </TabPanel>

            </Tabs>


        </div>
    );
};

export default MealsTabCategory;