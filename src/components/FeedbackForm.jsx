import React from "react";

const FeedbackForm = () => {
    return (
        <form className="nes-container is-rounded w-full max-w-[600px] bg-[#fefefe]">
            <textarea 
                name="feedback"  
                cols="20" 
                rows="10" 
                className="w-full bg-transparent outline-none resize-none"
                placeholder="Your amazing idea..."
            />

            <div className="flex justify-center w-full">
                <button className="nes-btn is-success">
                    Send
                </button>
            </div>
        </form>
    );
};

export default FeedbackForm;