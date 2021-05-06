/* Rocketseat: LaunchBase Bootcamp
   Challenge 06-01: Mini Challenges */

const Mask = {
    apply(input, func) {
        setTimeout(
            () => {
                input.value = Mask[func](input.value);
        }, 1);
    },
    formatPercentage(value) {
        value = value.replace(/\D/g, "");
        value = value.replace(/^0+/, "");
        value = value.replace(/(\d{4})(\d)/, "$1.$2");

        value = new Intl.NumberFormat("pt-BR", {
            style: "percent",
            minimumFractionDigits: 2,
            maximumFractionDigits: 4
        }).format(value / 10000);

        return value;
    },
    formatCPF(value) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1-$2");

        return value;
    }
};
