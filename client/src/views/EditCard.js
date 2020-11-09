import React from 'react';
import { Row, Col } from 'antd';
// import { Container, Grid, } from '@material-ui/core';

import CardImageWithSaveCancel from './EditCard/CardImageWithSaveCancel'
import CardAndOwnerName from './EditCard/CardAndOwnerName';
import EditEffect from './EditCard/EditEffect';

const EditCard = () => {
    return (
        <>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={16}>
                    <CardAndOwnerName />
                    <EditEffect />
                </Col>
                <Col span={8}>
                    <CardImageWithSaveCancel />
                </Col>
            </Row>
        </>
    )
}
export default EditCard;
