import { Wall } from '../../consts';
import { useAppSelector } from '../../hooks/state';

export default function ExtentionOpeningTable(): JSX.Element {
  const wallMaterial = useAppSelector((state) => state.offer.wallNarrowing);

  if (wallMaterial.qty && wallMaterial.title !== Wall.Beton) {
    return (
      <tr>
        <td className="confluenceTd">Расширение кирпичного проема</td>
        <td className="confluenceTd">Расширение кирпичного проема (и др. материалов), при наличии технической
            возможности, до 6 см.
        </td>
        <td className="confluenceTd">{wallMaterial.qty} м.п.</td>
        <td className="confluenceTd">{wallMaterial.qty * wallMaterial.price}<span>₽</span></td>
      </tr>
    );
  }

  if (wallMaterial.qty && wallMaterial.title === Wall.Beton) {
    return (
      <tr>
        <td className="confluenceTd">Расширение бетонного проема</td>
        <td className="confluenceTd">Расширение бетонного проема.</td>
        <td className="confluenceTd">{wallMaterial.qty} м.п.</td>
        <td className="confluenceTd">{wallMaterial.qty * wallMaterial.price}<span>₽</span></td>
      </tr>
    );
  }

  return (
    <>
    </>
  );
}
