import React, { useState, ChangeEvent } from 'react';
import Autocomplete from '@/components/autocomplete/autocomplete';

interface ChangecityModalProps {
  show: boolean;
  handleClose: () => void;
  onSearch: (city: string) => void;
}

const ChangecityModal: React.FC<ChangecityModalProps> = ({ show, handleClose, onSearch }) => {
    const [city, setCity] = React.useState<string>('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>, { newValue }: { newValue: string }) => {
        console.log('newValue',newValue);
        setCity(newValue);
    };

    const handleSearch = () => {
        console.log('Search for:', city);
        handleClose();
    };
    return (
        <>
            {show && <div className="modal-backdrop fade show"></div>}
            <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex={-1} role="dialog">
                <div className="modal-dialog modal-dialog-centered city-modal" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-primary d-block">
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
                            <Autocomplete value={city} onChange={handleInputChange} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChangecityModal;