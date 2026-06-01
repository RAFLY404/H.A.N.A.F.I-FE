import { presets } from '../services/api';

// Helper component for tooltips and info icons
const InfoIcon = ({ text }) => (
  <span className="info-icon">
    i
    <span className="tooltip">{text}</span>
  </span>
);

export default function PatientForm({ formData, setFormData, onSubmit, onReset, loading }) {
  
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const loadPreset = (presetKey) => {
    if (presets[presetKey]) {
      setFormData({ ...presets[presetKey] });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };


  return (
    <div className="card">
      <div className="card-title-group">
        <h2 className="card-title">
          <span>🩺</span> Patient Clinical History
        </h2>
        <div className="presets-container">
          <span className="preset-label">Quick Presets:</span>
          <button 
            type="button" 
            className="preset-btn"
            onClick={() => loadPreset('normal')}
            disabled={loading}
          >
            Low Risk
          </button>
          <button 
            type="button" 
            className="preset-btn"
            onClick={() => loadPreset('borderline')}
            disabled={loading}
          >
            Moderate
          </button>
          <button 
            type="button" 
            className="preset-btn"
            onClick={() => loadPreset('critical')}
            disabled={loading}
          >
            High Risk
          </button>
        </div>
      </div>

      <form onSubmit={handleFormSubmit}>
        
        {/* SECTION 1: DEMOGRAPHICS */}
        <div className="form-section">
          <h3 className="form-section-title">Demographics</h3>
          <div className="input-grid">
            
            {/* Age */}
            <div className="form-group">
              <div className="label-container">
                <label className="form-label" htmlFor="age">Age</label>
                <InfoIcon text="Patient age in years (Range: 1 - 120)" />
              </div>
              <input
                id="age"
                type="number"
                min="1"
                max="120"
                required
                className="form-input"
                value={formData.age || ''}
                onChange={(e) => handleInputChange('age', e.target.value)}
                disabled={loading}
              />
            </div>

            {/* Sex */}
            <div className="form-group">
              <div className="label-container">
                <label className="form-label">Biological Sex</label>
                <InfoIcon text="Patient biological sex" />
              </div>
              <div className="toggle-switch-group">
                <div 
                  className={`toggle-switch-option ${parseInt(formData.sex, 10) === 1 ? 'active' : ''}`}
                  onClick={() => !loading && handleInputChange('sex', 1)}
                >
                  Male
                </div>
                <div 
                  className={`toggle-switch-option ${parseInt(formData.sex, 10) === 0 ? 'active' : ''}`}
                  onClick={() => !loading && handleInputChange('sex', 0)}
                >
                  Female
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 2: CLINICAL HISTORY */}
        <div className="form-section">
          <h3 className="form-section-title">Clinical History</h3>
          <div className="input-grid">
            
            {/* Anaemia */}
            <div className="form-group">
              <div className="label-container">
                <label className="form-label">Anaemia</label>
                <InfoIcon text="Decrease of red blood cells or hemoglobin" />
              </div>
              <div className="toggle-switch-group">
                <div 
                  className={`toggle-switch-option ${parseInt(formData.anaemia, 10) === 1 ? 'active' : ''}`}
                  onClick={() => !loading && handleInputChange('anaemia', 1)}
                >
                  Yes
                </div>
                <div 
                  className={`toggle-switch-option ${parseInt(formData.anaemia, 10) === 0 ? 'active' : ''}`}
                  onClick={() => !loading && handleInputChange('anaemia', 0)}
                >
                  No
                </div>
              </div>
            </div>

            {/* Diabetes */}
            <div className="form-group">
              <div className="label-container">
                <label className="form-label">Diabetes</label>
                <InfoIcon text="If the patient has a history of diabetes mellitus" />
              </div>
              <div className="toggle-switch-group">
                <div 
                  className={`toggle-switch-option ${parseInt(formData.diabetes, 10) === 1 ? 'active' : ''}`}
                  onClick={() => !loading && handleInputChange('diabetes', 1)}
                >
                  Yes
                </div>
                <div 
                  className={`toggle-switch-option ${parseInt(formData.diabetes, 10) === 0 ? 'active' : ''}`}
                  onClick={() => !loading && handleInputChange('diabetes', 0)}
                >
                  No
                </div>
              </div>
            </div>

            {/* High Blood Pressure */}
            <div className="form-group">
              <div className="label-container">
                <label className="form-label">High Blood Pressure</label>
                <InfoIcon text="If the patient has a history of hypertension" />
              </div>
              <div className="toggle-switch-group">
                <div 
                  className={`toggle-switch-option ${parseInt(formData.high_blood_pressure, 10) === 1 ? 'active' : ''}`}
                  onClick={() => !loading && handleInputChange('high_blood_pressure', 1)}
                >
                  Yes
                </div>
                <div 
                  className={`toggle-switch-option ${parseInt(formData.high_blood_pressure, 10) === 0 ? 'active' : ''}`}
                  onClick={() => !loading && handleInputChange('high_blood_pressure', 0)}
                >
                  No
                </div>
              </div>
            </div>

            {/* Smoking */}
            <div className="form-group">
              <div className="label-container">
                <label className="form-label">Active Smoking</label>
                <InfoIcon text="If the patient actively smokes tobacco" />
              </div>
              <div className="toggle-switch-group">
                <div 
                  className={`toggle-switch-option ${parseInt(formData.smoking, 10) === 1 ? 'active' : ''}`}
                  onClick={() => !loading && handleInputChange('smoking', 1)}
                >
                  Yes
                </div>
                <div 
                  className={`toggle-switch-option ${parseInt(formData.smoking, 10) === 0 ? 'active' : ''}`}
                  onClick={() => !loading && handleInputChange('smoking', 0)}
                >
                  No
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 3: LAB MEASUREMENTS */}
        <div className="form-section">
          <h3 className="form-section-title">Laboratory Indicators</h3>
          <div className="input-grid">
            
            {/* Ejection Fraction */}
            <div className="form-group">
              <div className="label-container">
                <label className="form-label" htmlFor="ejection_fraction">Ejection Fraction</label>
                <InfoIcon text="Percentage of blood leaving the heart each contraction. Normal: 50-70%. Low values (<40%) indicate heart failure." />
              </div>
              <input
                id="ejection_fraction"
                type="number"
                min="10"
                max="80"
                required
                className="form-input form-input-with-unit"
                value={formData.ejection_fraction || ''}
                onChange={(e) => handleInputChange('ejection_fraction', e.target.value)}
                disabled={loading}
              />
              <span className="input-unit">%</span>
            </div>

            {/* Serum Creatinine */}
            <div className="form-group">
              <div className="label-container">
                <label className="form-label" htmlFor="serum_creatinine">Serum Creatinine</label>
                <InfoIcon text="Level of creatinine in the blood. Reflects kidney clearance. Normal: 0.6 - 1.2 mg/dL. Elevated indicates kidney dysfunction." />
              </div>
              <input
                id="serum_creatinine"
                type="number"
                step="0.1"
                min="0.1"
                max="15.0"
                required
                className="form-input form-input-with-unit"
                value={formData.serum_creatinine || ''}
                onChange={(e) => handleInputChange('serum_creatinine', e.target.value)}
                disabled={loading}
              />
              <span className="input-unit">mg/dL</span>
            </div>

            {/* Serum Sodium */}
            <div className="form-group">
              <div className="label-container">
                <label className="form-label" htmlFor="serum_sodium">Serum Sodium</label>
                <InfoIcon text="Level of sodium in blood. Normal: 135 - 145 mEq/L. Low sodium levels (hyponatremia) worsen risk prognosis." />
              </div>
              <input
                id="serum_sodium"
                type="number"
                min="100"
                max="150"
                required
                className="form-input form-input-with-unit"
                value={formData.serum_sodium || ''}
                onChange={(e) => handleInputChange('serum_sodium', e.target.value)}
                disabled={loading}
              />
              <span className="input-unit">mEq/L</span>
            </div>

            {/* CPK */}
            <div className="form-group">
              <div className="label-container">
                <label className="form-label" htmlFor="cpk">Creatinine Phosphokinase</label>
                <InfoIcon text="Level of the CPK enzyme in blood. Elevated levels indicate muscle tissue damage or cardiac stress." />
              </div>
              <input
                id="cpk"
                type="number"
                min="10"
                max="10000"
                required
                className="form-input form-input-with-unit"
                value={formData.creatinine_phosphokinase || ''}
                onChange={(e) => handleInputChange('creatinine_phosphokinase', e.target.value)}
                disabled={loading}
              />
              <span className="input-unit">mcg/L</span>
            </div>

            {/* Platelets */}
            <div className="form-group">
              <div className="label-container">
                <label className="form-label" htmlFor="platelets">Platelets Count</label>
                <InfoIcon text="Platelets in the blood. Normal range: 150,000 - 450,000 per microliter." />
              </div>
              <input
                id="platelets"
                type="number"
                min="10000"
                max="900000"
                required
                className="form-input form-input-with-unit"
                value={formData.platelets || ''}
                onChange={(e) => handleInputChange('platelets', e.target.value)}
                disabled={loading}
              />
              <span className="input-unit">/mcL</span>
            </div>

          </div>
        </div>

        {/* FORM ACTION BUTTONS */}
        <div className="button-bar">
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={onReset}
            disabled={loading}
          >
            Reset Form
          </button>
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? 'Evaluating...' : 'Run Risk Evaluation'}
          </button>
        </div>

      </form>
    </div>
  );
}
