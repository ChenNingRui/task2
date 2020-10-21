import React, { useEffect, useState } from 'react';
import Chart from "react-google-charts";

export default function CompareScatterChart(props) {
    let { selectList, indexList } = props;
    let [showData, setShowData] = useState([]);

    useEffect(() => {
        // console.log(selectList);
        setShowData(dataHandle(selectList, indexList))
    }, [selectList, indexList]);

    let dataHandle = (select, index) => {
        let list = [];
        list.push(['Index', 'price',]);
        for (let i = 0, length = select.length; i < length; i++) {
            list.push([index[i], select[i]['price']]);
        }

        return list;
    }

    return (
        <div style={{ display: 'flex', maxWidth: 500, maxHeight: 500 }}>
            <Chart
                width={'500px'}
                height={'500px'}
                chartType="ScatterChart"
                loader={<div>Loading Chart</div>}
                data={showData}
                options={{
                    title: 'price comparison',
                    hAxis: { title: 'Index', minValue: 0, },
                    vAxis: { title: 'price', minValue: 0 },
                    legend: 'none',
                    series: { indexList }
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div >
    )
}