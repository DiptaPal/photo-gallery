const Contact = () => {
    return (
        <div className="max-w-[1240px] m-auto p-4 h-screen">
            <h1 className="text-2xl font-bold text-center p-4">Let&apos;s work together</h1>
            <form className="max-w-[600px] m-auto">
                <div className="grid grid-cols-2 gap-2">
                    <input className="border shadow-lg p-3" type="text" placeholder="Name" name="name" id="name" />
                    <input className="border shadow-lg p-3" type="email" placeholder="Email" name="email" id="email" />
                </div>
                <input className="border shadow-lg p-3 w-full my-4" type="text" placeholder="Subject" name="subject" id="subject" />
                <textarea className="border shadow-lg p-3 w-full resize-none" name="message" id="message" cols="30" rows="10" placeholder="Message..."></textarea>
                <button className="border shadow-lg p-3 w-full mt-2" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;