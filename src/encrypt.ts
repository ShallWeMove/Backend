import NodeRSA from 'node-rsa';

// 키 문자열은 이 위치에 적절하게 대체하십시오.
const publicKeyString = process.env.PUBLIC_KEY!;
const privateKeyString = process.env.PRIVATE_KEY!;

// 키 쌍 생성
const public_key = new NodeRSA(publicKeyString);
const private_key = new NodeRSA(privateKeyString);

export const decrypt = async(encrypted: string) => {
    const decrypted = private_key.decrypt(encrypted, 'utf8');

    return decrypted
}