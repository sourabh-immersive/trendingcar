import React, { useState, ChangeEvent } from 'react';
import Autocomplete from '@/components/autocomplete/autocomplete';

interface ChangecityModalProps {
  show: boolean;
  handleClose: () => void;
  onSearch: (city: string) => void;
}

const ChangecityModal: React.FC<ChangecityModalProps> = ({ show, handleClose, onSearch }) => {
   
    return (
        <>
            {show && <div className="modal-backdrop fade show"></div>}
            <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex={-1} role="dialog">
                <div className="modal-dialog modal-dialog-centered city-modal" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-theme d-block">
                            <div className="d-flex align-items-center">
                                <h5 className="modal-title text-white fz-18" id="changecityModalLabel">
                                    We need your city to customize your <br /> experience
                                </h5>
                                <div className="ms-auto">
                                    <button type="button" className="close" aria-label="Close" onClick={handleClose}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body">
                          <Autocomplete  api={'fuelStationCities'} type={'city'} redirect={'fuel-stations'}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChangecityModal;
