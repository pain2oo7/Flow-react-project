import React from "react";
import ExpertJenny from '../assets/2part/Jenny Wilson.png';
import ExpertCameron from '../assets/2part/Cameron Williamson.png';
import ExpertCourtney from '../assets/2part/Courtney Henry.png';
import ExpertDianne from '../assets/2part/Dianne Russell.png';
import ExpertBrooklyn from '../assets/2part/Brooklyn Simmons.png';
import ExpertJerome from '../assets/2part/Jerome Bell.png';
import './experts.css';
import { useTheme } from '../ThemeSwitch/ThemeContext';

const Experts = () => {
  const { isDarkTheme, themeStyles } = useTheme();

  return (
    <div className="Experts" style={{ background: themeStyles.background, color: themeStyles.color }}>
      <h2 className="h2_experts" style={{ color: themeStyles.color }}>Meet our experts</h2>
      <p className="p_experts" style={{ color: themeStyles.color }}>Our team boasts top green energy experts, driving innovation in sustainability.</p>
      <div className="experts_container">
        <div className="experts_flex1">
          <div className="card_expert" style={{ borderColor: themeStyles.borderColor }}>
            <img className="experts_pic" src={ExpertJenny} alt="Jenny Wilson" />
            <h3 style={{ color: themeStyles.color }}>Jenny Wilson</h3>
            <p style={{ color: themeStyles.color }}>Senior Sustainability</p>
          </div>

          <div className="card_expert" style={{ borderColor: themeStyles.borderColor }}>
            <img className="experts_pic" src={ExpertCameron} alt="Cameron Williamson" />
            <h3 style={{ color: themeStyles.color }}>Cameron Williamson</h3>
            <p style={{ color: themeStyles.color }}>Senior Sustainability</p>
          </div>

          <div className="card_expert" style={{ borderColor: themeStyles.borderColor }}>
            <img className="experts_pic" src={ExpertCourtney} alt="Courtney Henry" />
            <h3 style={{ color: themeStyles.color }}>Courtney Henry</h3>
            <p style={{ color: themeStyles.color }}>Energy Analysts</p>
          </div>
        </div>
        <div className="experts_flex2">
          <div className="card_expert" style={{ borderColor: themeStyles.borderColor }}>
            <img className="experts_pic" src={ExpertDianne} alt="Dianne Russell" />
            <h3 style={{ color: themeStyles.color }}>Dianne Russell</h3>
            <p style={{ color: themeStyles.color }}>Senior Renewable</p>
          </div>

          <div className="card_expert" style={{ borderColor: themeStyles.borderColor }}>
            <img className="experts_pic" src={ExpertBrooklyn} alt="Brooklyn Simmons" />
            <h3 style={{ color: themeStyles.color }}>Brooklyn Simmons</h3>
            <p style={{ color: themeStyles.color }}>Energy Engineer</p>
          </div>

          <div className="card_expert card_expert_margin" style={{ borderColor: themeStyles.borderColor }}>
            <img className="experts_pic" src={ExpertJerome} alt="Jerome Bell" />
            <h3 style={{ color: themeStyles.color }}>Jerome Bell</h3>
            <p style={{ color: themeStyles.color }}>Energy Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;