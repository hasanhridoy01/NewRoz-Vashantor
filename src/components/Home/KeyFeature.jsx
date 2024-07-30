import SectionTitle from "../SectionTitle/SectionTitle";

const KeyFeature = () => {
    return (
        <div className="container mx-auto lg:px-14 px-5 lg:py-14 py-5 lg:pt-28 pt-16">
            <SectionTitle title="Key Features" textOne='Vashantor has some unique key features for your localization' textTwo='which is very effective and secured.' />
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-10 py-16 items-center"></div>
        </div>
    );
};

export default KeyFeature;