import React from "react";
import './styles.scss';

const TableRow = ({name, product, saleColor, sale, statusColor, status}) => (
    <tr className="tableRow">
        <td>{name}</td>
        <td>{product}</td>
        <td className={saleColor}>{sale}</td>
        <td className="status"><div className={statusColor}>{status}</div></td>
    </tr>
);

export default TableRow;