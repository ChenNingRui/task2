import React, { useEffect, useState } from 'react';
import Chart from "react-google-charts";


export default function CompareComboChart(props) {
    let { selectList, indexList } = props;
    let [showData, setShowData] = useState([]);

    useEffect(() => {
        // console.log(selectList);
        setShowData(dataHandle(selectList, indexList))
    }, [selectList, indexList]);

    let dataHandle = (select, index) => {
        let list = [];
        list.push(['Index', 'length', 'width', 'height', 'wheel-base']);
        for (let i = 0, length = select.length; i < length; i++) {
            list.push([index[i], select[i]['length'], select[i]['width'], select[i]['height'], select[i]['wheel-base']]);
        }

        return list;
    }

    return (
        <div style={{ display: 'flex', maxWidth: 500, maxHeight: 500 }}>
            <Chart
                width={'500px'}
                height={'500px'}
                chartType="ComboChart"
                loader={<div>Loading Chart</div>}
                data={showData}
                options={{
                    title: 'Car Size comparison',
                    vAxis: { title: 'Size' },
                    hAxis: { title: 'Index' },
                    seriesType: 'bars',
                    series: { 3: { type: 'line' } },
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}