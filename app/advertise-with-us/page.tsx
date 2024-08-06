'use client'

import Link from 'next/link';
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
    name: string;
    email: string;
    mobile: string;
    city: string;
    feedback: string;
    terms: boolean;
    form_type: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    mobile?: string;
    city?: string;
    feedback?: string;
    terms?: string;
    form_type?: string;
}

export default function Page() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        mobile: '',
        city: '',
        feedback: '',
        terms: false,
        form_type: 'advertise_form'
    });
    const [status, setStatus] = useState('');

    //   const [errors, setErrors] = useState<FormErrors>({});

    const validate = (formData: FormData): Errors => {
        const newErrors: Errors = {}

        if (!formData.email) {
            newErrors.email = "Please enter a email."
        }

        return newErrors
    }

    type Errors = Partial<Record<keyof FormData, string>>
    const [errors, setErrors] = useState<Errors>(validate(formData))

    type Touched = Partial<Record<keyof FormData, boolean>>
    const [touched, setTouched] = useState<Touched>({})

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked, files } = e.target as HTMLInputElement;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files![0] : value,
        });
    };

    //   const validate = (): FormErrors => {
    //     const newErrors: FormErrors = {};
    //     if (!formData.name) newErrors.name = 'Name is required';
    //     if (!formData.email) newErrors.email = 'Email is required';
    //     if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
    //     if (!formData.city) newErrors.city = 'City is required';
    //     if (!formData.feedback) newErrors.feedback = 'Feedback is required';
    //     if (!formData.terms) newErrors.terms = 'You must agree to the terms and conditions';
    //     return newErrors;
    //   };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);

        setStatus('Submitting...');

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact_form`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    city: '',
                    feedback: '',
                    terms: false,
                    form_type: 'contact_form'
                });
            } else {
                const error = await response.json();
                setStatus(`Error: ${error.message}`);
            }
        } catch (error) {
            setStatus('An unexpected error occurred');
        }

        // const validationErrors = validate();
        // if (Object.keys(validationErrors).length > 0) {
        //     setErrors(validationErrors);
        // } else {
        //     // Handle form submission
        //     console.log(formData);
        // }
    };

    return (
        <main>
            <section className="sitemap-layout">
                <div className="container">
                    <div className="row single-content-area">
                        <h1 style={{ textAlign: 'center' }}>Advertise With Us</h1>
                        <hr />
                        <form onSubmit={handleSubmit} className="p-4 border rounded">
                            <h4>Contact us for advertisement</h4>
                            <div className="row mb-3">
                                <div className="col">
                                    <input
                                        type="text"
                                        className={`form-control`}
                                        placeholder="Enter Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={event => {
                                            setFormData({ ...formData, name: event.target.value })
                                            setErrors(
                                                validate({ ...formData, name: event.target.value })
                                            )
                                        }}
                                        onBlur={() => setTouched({ ...touched, name: true })}
                                    />
                                    {errors.name && touched.name ? <p>{errors.name}</p> : null}
                                </div>
                                <div className="col">
                                    <input
                                        type="email"
                                        className={`form-control`}
                                        placeholder="Enter Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={event => {
                                            setFormData({ ...formData, email: event.target.value })
                                            setErrors(
                                                validate({ ...formData, email: event.target.value })
                                            )
                                        }}
                                        onBlur={() => setTouched({ ...touched, email: true })}
                                    />
                                    {errors.email && touched.email ? <p>{errors.email}</p> : null}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <input
                                        type="text"
                                        className={`form-control`}
                                        placeholder="Enter Mobile Number"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={event => {
                                            setFormData({ ...formData, mobile: event.target.value })
                                            setErrors(
                                                validate({ ...formData, mobile: event.target.value })
                                            )
                                        }}
                                        onBlur={() => setTouched({ ...touched, mobile: true })}
                                    />
                                    {errors.mobile && touched.mobile ? <p>{errors.mobile}</p> : null}
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        className={`form-control`}
                                        placeholder="City"
                                        name="city"
                                        value={formData.city}
                                        onChange={event => {
                                            setFormData({ ...formData, city: event.target.value })
                                            setErrors(
                                                validate({ ...formData, city: event.target.value })
                                            )
                                        }}
                                        onBlur={() => setTouched({ ...touched, city: true })}
                                    />
                                    {errors.city && touched.city ? <p>{errors.city}</p> : null}
                                </div>
                            </div>
                            <div className="mb-3">
                                <textarea
                                    className={`form-control`}
                                    placeholder="Please write about your product, what can we advertise?"
                                    name="feedback"
                                    value={formData.feedback}
                                    onChange={event => {
                                        setFormData({ ...formData, feedback: event.target.value })
                                        setErrors(
                                            validate({ ...formData, feedback: event.target.value })
                                        )
                                    }}
                                    onBlur={() => setTouched({ ...touched, feedback: true })}
                                    rows={5}
                                ></textarea>
                                {errors.feedback && touched.feedback ? <p>{errors.feedback}</p> : null}
                            </div>
                            <div className="mb-3" style={{ display: 'none' }}>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="file"
                                    onChange={handleChange}
                                    accept=".jpg,.png"
                                />
                                <small className="form-text text-muted">Upload .jpg, .png files only.</small>
                            </div>
                            <div className="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    className={`form-check-input ${errors.terms ? 'is-invalid' : ''}`}
                                    name="terms"
                                    checked={formData.terms}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label">
                                    I agree to <Link href="/terms-and-conditions">Terms & Conditions</Link>
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            {status && <p>{status}</p>}
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}