import React from "react";

const FeedbackForm = () => {
    return (
        <form className="nes-container is-rounded w-full max-w-[600px] bg-[#fefefe]">
            <textarea 
                name="feedback"  
                cols="20" 
                rows="10" 
                className="w-full outline-none resize-none bg-transparent"
                placeholder="Ваша потрясающая идея..."
            />

            <div className="w-full flex justify-center">
                <button className="nes-btn is-success">
                    Отправить
                </button>
            </div>
        </form>
    );
};

export default FeedbackForm;