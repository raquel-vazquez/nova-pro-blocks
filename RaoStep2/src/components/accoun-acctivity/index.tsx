import React, { useState } from 'react'
import { Checkbox, Button } from 'antd';
import { useIntl } from 'umi'
import { ClockCircleOutlined } from '@ant-design/icons';
import { CheckBoxProps } from './interfaces/checkbox.interface';
import { CheckBoxOptions } from '../../blocks/checkboxOptions';
import styles from './index.less';

interface Props {
    optionsCheck: string[],
    setFlow: Function,
    fontFamily: Font,
    setOnClose: Function,
    setShowModal: Function,
    setShowDrawer: Function
}
interface Font {
    fontTitle: string,
    fontSubtitle: string,
    fontTextTerms: string
}

export const AccountActivity: React.FC<Props> = ({
    optionsCheck,
    setFlow,
    fontFamily: font,
    setOnClose,
    setShowModal,
    setShowDrawer
}) => {
    const intl = useIntl();
    let valueCheck;

    const [checkVal, setCheck] = useState(['Menos de $18,000']);
    const [stateCheck, setStateCheck] = useState(
        {
            checked: false,
        }
    )

    if (checkVal === []) {
        valueCheck = []
    } else {
        valueCheck = checkVal.length === 1 ? checkVal[0] : checkVal[1]
    }

    const props: CheckBoxProps = {
        options: optionsCheck,
        setCheck,
        defValue: valueCheck
        // defValue: checkVal.length === 1 ? checkVal : []
    }

    const onChange = (e: any) => {
        setStateCheck({
            ...stateCheck,
            checked: e.target.checked,
        });
    };

    const valDis = props.defValue === undefined ? true : false;
    const valDisBut = !stateCheck.checked || valDis ? true : false;

    const onValidateFlow = () => {
        const { defValue } = props;
        if (defValue.includes('Menos') || defValue.includes('less')) {
            setFlow('n2');
            setOnClose(true);
            setShowModal(false),
                setShowDrawer(false)
        } else {
            setFlow('n4')
        }

    }
    return (
        <div className={styles.container}>
            <p className={styles.clock}>
                <ClockCircleOutlined />{` 30 seg.`}
            </p>
            <h2 style={{ fontFamily: `${font.fontTitle}` }}>{intl.formatMessage({ id: 'BLOCK_NAME.title' })}</h2>
            <p className={styles.subtitle} style={{ fontFamily: `${font.fontSubtitle}` }}>{intl.formatMessage({ id: 'BLOCK_NAME.subtitle' })}</p>
            <CheckBoxOptions {...props} />
            <div className={styles.buttons}>
                <Checkbox
                    checked={stateCheck.checked}
                    disabled={valDis}
                    onChange={onChange}
                    className={styles.textTerms}
                    style={{ fontFamily: `${font.fontTextTerms}` }}
                >
                    {intl.formatMessage({ id: 'BLOCK_NAME.terms-conditions1' })} <a className={styles.termsLikn} href="#">{intl.formatMessage({ id: 'BLOCK_NAME.terms-conditions2' })}</a>
                </Checkbox>
                <br />
                <Button
                    type="primary"
                    size='large'
                    shape="round"
                    disabled={valDisBut}
                    className={styles.btnContinue}
                    onClick={onValidateFlow} block>
                    {intl.formatMessage({ id: 'BLOCK_NAME.continue_button' })}
                </Button>
            </div>
        </div>
    )
}
