import { Card, Row, Col, Button } from 'antd';
import React from 'react';
import { dataFixture } from './fixture/data.fixture';
import styles from './index.less';
import { PropsTotalReq } from './interfaces/totalReq.interface';


const TotalRequestCard: React.FC<PropsTotalReq> = ({
  title = dataFixture.title,
  fontFam = dataFixture.fontFam,
  imgTitle = dataFixture.imgTitle,
  totalRequest = dataFixture.totalRequest,
  optionInfo = dataFixture.optionInfo,
  subtitle = dataFixture.subtitle,
  options = dataFixture.options }) => {

  const numberFormat = (number: any) => {
    let format = number.substr(1).split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1,');
    format = format.split('').reverse().join('').replace(/^[\.]/, '');
    return `${number.charAt(0)}${format}`;
  }

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
            <p className={styles.totalRequest} style={{ fontFamily: fontFam.fontTotalReq }}>
              {numberFormat(`${totalRequest}`)}
            </p>
          </Col>
          <Col span={6}>
            <img className={styles.imgTitle} src={imgTitle}></img>
          </Col>
        </Row>
      </div>

      <div className={styles.container} >
        <p className={styles.subtitle} style={{ fontFamily: fontFam.fontSubtitle }}>{subtitle}</p>
        {options.map((op: any) => (
          <div key={op.nameOption} className={styles.options}>
            <Row>
              <Col span={18}>
                <p className={styles.totalRequestOp} style={{ fontFamily: fontFam.fontTotalReqOp }}>
                  {numberFormat(`${op.totalRequest}`)}
                </p>
              </Col>
              <Col span={6}>
                {op.icon}
              </Col>
            </Row>
            <p className={styles.nameOptions} style={{ fontFamily: fontFam.fontOptions }}>{op.nameOption}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TotalRequestCard;