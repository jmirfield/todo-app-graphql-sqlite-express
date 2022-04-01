import { useState } from 'react';

const useTab = () => {
    const [tab, setTab] = useState(0)
    const handleChange = (e, value) => setTab(value)
    return [tab, handleChange];
}

export default useTab;