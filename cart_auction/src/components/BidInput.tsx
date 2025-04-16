import { commonBtn } from "../dataset/config";
import { bid, withdraw } from "../methods";

const BidInput = ({
  userWallet,
  mybid,
  setMybid,
}: {
  userWallet: string | undefined;
  mybid: string;
  setMybid: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-102 hover:shadow-xl">
      <h2 className="text-lg font-semibold text-white mb-4">💰 입찰가 입력</h2>
      <input
        type="number"
        placeholder="입찰가를 입력하세요"
        className="w-full p-3 bg-[#111827] text-white border border-gray-600 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setMybid(e.target.value)}
      />

      <div className="flex gap-3 justify-center">
        <button type="submit" className={commonBtn} onClick={() => bid(userWallet, mybid)}>
          입찰하기
        </button>
        <button type="submit" className={commonBtn} onClick={() => withdraw(userWallet)}>
          출금하기
        </button>
      </div>
    </div>
  );
};

export default BidInput;
