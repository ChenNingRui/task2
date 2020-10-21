import React from 'react';
import { useTablePipeline, features, BaseTable } from 'ali-react-table';
import { Checkbox } from '@alifd/next'

export default function DataTable(props) {
    let { data, selectList, indexList } = props;
    let dataSource = data;
    let max = 5;

    const columns = [
        { code: 'risk-factor', name: 'risk-factor', width: 100, features: { sortable: true } },
        { code: 'normalized-losses', name: 'normalized-losses', width: 100, align: 'right', features: { sortable: true } },
        { code: 'make', name: 'make', width: 100, align: 'right', features: { sortable: true } },
        { code: 'fuel-type', name: 'fuel-type', width: 100, align: 'right', features: { sortable: true } },
        { code: 'aspiration', name: 'aspiration', width: 100, features: { sortable: true } },
        { code: 'num-of-doors', name: 'num-of-doors', width: 100, features: { sortable: true } },
        { code: 'body-style', name: 'body-style', width: 100, features: { sortable: true } },
        { code: 'drive-wheels', name: 'drive-wheels', width: 100, features: { sortable: true } },
        { code: 'engine-location', name: 'engine-location', width: 100, features: { sortable: true } },
        { code: 'wheel-base', name: 'wheel-base', width: 100, features: { sortable: true } },
        { code: 'length', name: 'length', width: 100, features: { sortable: true } },
        { code: 'width', name: 'width', width: 100, features: { sortable: true } },
        { code: 'height', name: 'height', width: 100, features: { sortable: true } },
        { code: 'curb-weight', name: 'curb-weight', width: 100, features: { sortable: true } },
        { code: 'engine-type', name: 'engine-type', width: 100, features: { sortable: true } },
        { code: 'num-of-cylinders', name: 'num-of-cylinders', width: 100, features: { sortable: true } },
        { code: 'engine-type', name: 'engine-type', width: 100, features: { sortable: true } },
        { code: 'engine-size', name: 'engine-size', width: 100, features: { sortable: true } },
        { code: 'engine-type', name: 'engine-type', width: 100, features: { sortable: true } },
        { code: 'fuel-system', name: 'fuel-system', width: 100, features: { sortable: true } },
        { code: 'bore', name: 'bore', width: 100, features: { sortable: true } },
        { code: 'stroke', name: 'stroke', width: 100, features: { sortable: true } },
        { code: 'compression-ratio', name: 'compression-ratio', width: 100, features: { sortable: true } },
        { code: 'horsepower', name: 'horsepower', width: 100, features: { sortable: true } },
        { code: 'peak-rpm', name: 'peak-rpm', width: 100, features: { sortable: true } },
        { code: 'city-mpg', name: 'city-mpg', width: 100, features: { sortable: true } },
        { code: 'highway-mpg', name: 'highway-mpg', width: 100, features: { sortable: true } },
        { code: 'price', name: 'price', width: 100, features: { sortable: true } },
        { lock: true, width: 80, name: 'index', getValue(record: any, rowIndex: number) { return rowIndex }, },
    ];

    let onTableChange = (keys) => {
        if (keys.length > max) {
            let num = keys.length - max;
            keys.splice(0, num);
        }

        let list = [];
        for (let i = 0, length = keys.length; i < length; i++) {
            list.push(dataSource[keys[i]])
        }
        selectList(list);
        indexList(keys);
    }

    let pipeline = useTablePipeline({ components: { Checkbox } })
        .input({ dataSource, columns })
        .primaryKey('id')
        .use(features.sort(true))
        .use(features.multiSelect({
            defaultValue: ['0', '1', '2', '3', '4'],
            highlightRowWhenSelected: true,
            checkboxColumn: { lock: true },
            onChange: onTableChange
        }))
        .use(features.columnHover(true))

    return <BaseTable {...pipeline.getProps()} style={{ marginTop: 0, maxWidth: 900, height: 400, overflow: 'auto' }} />
}