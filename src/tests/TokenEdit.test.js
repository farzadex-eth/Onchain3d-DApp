import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import TokenEdit from '../components/TokenEdit';
import { ContractProvider } from '../ContractContext';
import { WalletProvider } from '../WalletContext';
import TokenContext, { settingProperties, shapes } from '../TokenContext';

afterEach(cleanup);


const testToken = {
    "svg": "",
    "tid": 1,
    "settings": {
        observer: [
            "73786976294838206464",
            "94078394775918706688",
            "84855022739063930880"
        ],
        opacity: "69",
        rotating_mode: true,
        angular_speed_deg: "31",
        dist_v_normalize: true,
        face_or_wire: false,
        back_color: "13420490",
        wire_color: "3228617",
        color_list: [
            "16761600",
            "15158332",
            "3447003",
            "3066993",
            "10181046",
            "15844367"
        ]
    }
}

test('Check Token Edit', async () => {
    const tokenEdit = render(
        <WalletProvider>
            <ContractProvider>
                <TokenContext.Provider value={{ token: testToken, preview: testToken, settingProperties: settingProperties, shapes: shapes }}>
                    <TokenEdit />
                </TokenContext.Provider>
            </ContractProvider>
        </WalletProvider>
    );

    // see tabs
    settingProperties.forEach((setting) => {
        const elems = screen.getAllByText(setting.title);
        elems.forEach((elem) => {
            expect(elem).toBeInTheDocument();
        })
    })

    //test tab click
    const tabs = screen.getAllByRole("tab");
    tabs.forEach((tab, index) => {
        expect(tab).toHaveTextContent(settingProperties[index].title);
        fireEvent.click(tab);
        expect(tab.getAttribute("tabindex")).toBe("0");
    })

    // test preview all button
    fireEvent.click(tokenEdit.getByText(/Preview All Changes/i));
    expect(tokenEdit.getByAltText(/token-edit-loading/i));
    await waitFor(() => {
        expect(tokenEdit.findByText(/Cube/i));
    })

})
