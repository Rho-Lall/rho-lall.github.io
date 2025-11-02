import React, { useState } from 'react';
import { navigate } from 'gatsby';

const LeadCaptureForm = ({ apiEndpoint, buttonText = "Become AI emPowered" }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        details: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    // Log the endpoint when component loads (for testing)
    console.log('LeadCaptureForm loaded with endpoint:', apiEndpoint);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        console.log('Submitting to API endpoint:', apiEndpoint);
        console.log('Form data:', formData);

        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Origin': window.location.origin
                },
                body: JSON.stringify({
                    ...formData,
                    customFields: {
                        source: 'react-form',
                        timestamp: new Date().toISOString()
                    }
                }),
                mode: 'cors',
                credentials: 'omit'
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || 'Submission failed');
            }

            const result = await response.json();
            // Redirect to offer page on success
            navigate('/offer/results_now_ai_action_pack/');

        } catch (error) {
            setMessage('Something went wrong. Please try again.');
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="space-y-4">
            {/* Error Message Only */}
            {message && (
                <div className="p-4 rounded-lg bg-red-100 border border-red-400 text-red-700">
                    {message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="First Name"
                        required
                        minLength={2}
                        maxLength={50}
                        className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                {/* Email Input */}
                <div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required
                        className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                {/* Details Textarea */}
                <div>
                    <textarea
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="Tell me a little about what you are struggling with or the result you are looking for."
                        rows="4"
                        maxLength={500}
                        className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 text-lg rounded-lg transition duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Submitting...' : buttonText}
                </button>
            </form>
        </div>
    );
};

export default LeadCaptureForm;