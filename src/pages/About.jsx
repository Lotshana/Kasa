import Banner from '../components/Banner';
import Collaps from '../components/Collaps';

import {AboutList} from '../datas/About';

const About = () => {
    return (
        <div className="About">
            <Banner />
            <div className="AboutCollaps">
                {AboutList.map(({title, content}, index) =>
                    <Collaps
                        key={`${index}`}
                        title={title}
                        content={content}
                    />
                )}
            </div>
        </div>
    )
}

export default About