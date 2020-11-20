import { Card, Row, Col, Button } from 'antd';
import React from 'react';
import { dataFixture } from './fixture/data.fixture';
import styles from './index.less';
import { PropsDataReq } from './interfaces/totalReq.interface';


const DataRequestBlock: React.FC<PropsDataReq> = ({
  title = dataFixture.title,
  fontFam = dataFixture.fontFam,
  imgTitle = dataFixture.imgTitle,
  optionInfo = dataFixture.optionInfo,
  options = dataFixture.options
}) => {

  return (
    <Card>
      <div>
        <Row>
          <Col span={18}>
            <Row>
              <Col span={15}>
                <h2 className={styles.title} style={{ fontFamily: fontFam.fontTitle }}>{title}</h2>
              </Col>
              <Col span={3}>
                <div className={styles.btnInfo}>
                  <Button type='text' shape="circle" icon={optionInfo.icon} size='large' onClick={optionInfo.action} />
                </div>
              </Col>
            </Row>
            {options.map((op: any) => (
              <div className={styles.options}>
                <p className={styles.valOption} style={{ fontFamily: fontFam.fontValOp }}>
                  {op.valOp}
                </p>
                <p className={styles.nameOption} style={{ fontFamily: fontFam.fontNameOp }}>{op.nameOp}</p>
              </div>
            ))}
          </Col>
          <Col span={6}>
            <img className={styles.imgTitle} src={imgTitle}></img>
          </Col>
        </Row>
      </div>

    </Card>
  );
};

export default DataRequestBlock;